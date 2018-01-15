import AWS from "aws-sdk"
import algoliasearch from "algoliasearch"
import BrowserSync from "browser-sync"
import browserSyncConfig from "./.browsersyncrc.js"
import debounce from "gulp-debounce"
import del from "del"
import fs from "fs"
import gulp from "gulp"
import GulpConfig from "./gulp.config.js"
import hugo from "hugo-bin"
import imagemin from "gulp-imagemin"
import named from "vinyl-named"
import newer from "gulp-newer"
import {dirname, basename} from "path"
import postcss from "gulp-postcss"
import rename from "gulp-rename"
import runsequence from "run-sequence"
import {spawn} from "child_process"
import sprite from "gulp-svg-sprite"
import sourcemaps from "gulp-sourcemaps"
import through from "through2"
import util from "gulp-util"
import webpack from "webpack-stream"
import webpackConfig from "./.webpackrc.js"

const env = (process.env.HUGO_ENV = process.env.NODE_ENV || "development")
const argsType = process.env.HUGO_ARGS || env
const isProduction = env === "production"
const browserSync = BrowserSync.create()
const gulpConfig = GulpConfig()

let ENV_VARS = process.env
if (argsType !== "production" && fs.existsSync("./.env.js")) {
  ENV_VARS = require("./.env.js").default
}

/**
 * @task hugo
 * Runs hugo with environment-based
 * build arguments
 */
gulp.task("hugo", cb => build(cb))

/**
 * @task server
 * Initializes browsersync server and
 * sets up watch tasks to rebuild
 */
gulp.task("server", ["build"], () => {
  browserSync.init(browserSyncConfig())
  gulp.watch(gulpConfig.styles.watch, ["styles"])
  gulp.watch(gulpConfig.scripts.watch, ["scripts"])
  gulp.watch(gulpConfig.images.watch, ["images"])
  gulp.watch(gulpConfig.svg.watch, ["svg"])
  gulp.watch(
    [
      gulpConfig.dest + "/**/*",
      `!${gulpConfig.styles.dest}/**/*`,
      `!${gulpConfig.scripts.dest}/**/*`,
      `!${gulpConfig.images.dest}/**/*`
    ],
    ["hugo"]
  )
})

/**
 * @task build
 * Builds all static assets, and then
 * compiles the static site with Hugo
 */
gulp.task("build", ["clean"], cb => {
  runsequence(["styles", "scripts", "images", "svg"], "hugo", "algolia", cb)
})

/**
 * @task algolia
 * Updates the algolia indexes during production builds
 * Works by finding all algolia.json files in build dir,
 * and pushes to an index matching the parent directory name
 */
gulp.task("algolia", cb => {
  if (isProduction) {
    const algolia = algoliasearch(
      ENV_VARS.ALGOLIA_APP_ID,
      ENV_VARS.ALGOLIA_ADMIN_KEY
    )

    return gulp.src(gulpConfig.algolia.src).pipe(
      through.obj({objectMode: true}, (file, enc, done) => {
        const index = basename(dirname(file.path))
        const algoliaIndex = algolia.initIndex(index)
        const indexData = JSON.parse(file._contents.toString())

        algoliaIndex.addObjects(indexData, (err, content) => {
          if (err) {
            log(err, err.toString(), "Algolia")
          } else {
            log(null, `Sending index ${index} to Algolia`, "Algolia")
          }
        })

        done()
      })
    )
  }

  cb()
})

/**
 * @task s3redirects
 * Updates a target s3 bucket's objects with redirect
 * rules generated with Hugo's alias feature
 * 
 * Requires the following env vars:
 *  - AWS_ACCESS_KEY_ID
 *  - AWS_SECRET_ACCESS_KEY
 */
gulp.task("s3redirects", cb => {
  const hasProfile = ENV_VARS.AWS_PROFILE
  const hasKeys = ENV_VARS.AWS_ACCESS_KEY_ID && ENV_VARS.AWS_SECRET_ACCESS_KEY
  const bucket = ENV_VARS.AWS_S3_BUCKET
  if (hasProfile && bucket || hasKeys && bucket) {
    const s3 = new AWS.S3()

    return gulp.src(gulpConfig.redirects.src)
      .pipe(through.obj({objectMode: true}, (file, enc, done) => {
        const redirects = JSON.parse(file._contents.toString())
        const config = {
          Bucket: bucket,
          WebsiteConfiguration: {
            IndexDocument: {
              Suffix: "index.html"
            },
            ErrorDocument: {
              Key: "404.html"
            },
            RoutingRules: redirects
          }
        }

        s3.putBucketWebsite(config, function(err, data) {
          if (err) log(err, err.toString(), "AWS S3")
          else log(null, JSON.stringify(data), "AWS S3")
        })
      }))
  }
})

/**
 * @task styles
 * Compiles all css
 */
gulp.task("styles", cb => {
  runsequence("styles:production", "styles:development", cb)
})

/**
 * @task styles:production
 * Compiles the production-ready CSS to project folder
 * and streams it if its a production server environment
 */
gulp.task("styles:production", cb => {
  const task = gulp
    .src(gulpConfig.styles.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(
      postcss({env: "production"}).on("error", err =>
        log(err, err.toString(), "PostCSS")
      )
    )
    .pipe(sourcemaps.write("."))
    .pipe(
      rename(path => {
        path.dirname = "/"

        if (path.extname.indexOf(".map") < 0) path.extname = ".min.css"

        return path
      })
    )
    .pipe(gulp.dest(gulpConfig.styles.dest))

  if (isProduction) {
    task.pipe(browserSync.stream())
  }

  return task
})

/**
 * @task styles:development
 * Generates the non-production styles to temp folder
 * and streams it if its a development server environment
 */
gulp.task("styles:development", cb => {
  if (isProduction) return cb()

  return gulp
    .src(gulpConfig.styles.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(postcss().on("error", err => log(err, err.toString(), "PostCSS")))
    .pipe(
      rename(path => {
        path.dirname = "/"

        if (path.extname.indexOf(".map") < 0) path.extname = ".min.css"

        return path
      })
    )
    .pipe(gulp.dest(gulpConfig.styles.tmp))
    .pipe(browserSync.stream())
})

/**
 * @task scripts
 * Compiles all js
 */
gulp.task("scripts", cb => {
  runsequence("scripts:production", "scripts:development", cb)
})

/**
 * @task scripts:production
 * Compiles the production-ready JS to project folder
 * and streams it if its a production server environment
 */
gulp.task("scripts:production", cb => {
  const task = gulp
    .src(gulpConfig.scripts.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(named())
    .pipe(
      webpack(webpackConfig("production")).on("error", function(err) {
        log(err, err.toString(), "Webpack")
        this.emit("end")
      })
    )
    .pipe(
      rename(path => {
        if (path.extname === ".js") path.extname = ".min.js"

        return path
      })
    )
    .pipe(gulp.dest(gulpConfig.scripts.dest))

  if (isProduction) {
    task.pipe(browserSync.stream())
  }

  return task
})

/**
 * @task scripts:development
 * Generates the non-production styles to temp folder
 * and streams it if its a development server environment
 */
gulp.task("scripts:development", cb => {
  if (isProduction) return cb()

  return gulp
    .src(gulpConfig.scripts.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(named())
    .pipe(
      webpack(webpackConfig()).on("error", function(err) {
        log(err, err.toString(), "Webpack")
        this.emit("end")
      })
    )
    .pipe(
      rename(path => {
        if (path.extname === ".js") path.extname = ".min.js"

        return path
      })
    )
    .pipe(gulp.dest(gulpConfig.scripts.tmp))
    .pipe(browserSync.stream())
})

/**
 * @task images
 * Optimizes all images
 * and streams it if its a development server environment
 */
gulp.task("images", () => {
  return gulp
    .src(gulpConfig.images.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(newer(gulpConfig.images.dest))
    .pipe(imagemin([], {verbose: isProduction ? true : false}))
    .pipe(gulp.dest(gulpConfig.images.dest))
    .pipe(browserSync.stream())
})

/**
 * @task svg
 * Generates an SVG symbol for use in
 * theme and layouts
 */
gulp.task("svg", () => {
  return gulp
    .src(gulpConfig.svg.src)
    .pipe(debounce({ wait: 1000 }))
    .pipe(newer(gulpConfig.svg.dest))
    .pipe(
      sprite(gulpConfig.svg.config).on("error", err =>
        log(err, err.toString(), "SVG Sprite")
      )
    )
    .pipe(gulp.dest(gulpConfig.svg.dest))
    .pipe(browserSync.stream())
})

/**
 * @task clean
 * Cleans the build and temp directories
 */
gulp.task("clean", () => {
  return del([gulpConfig.tmp, gulpConfig.build], {dot: true})
})

/**
 * Execute Hugo with Build Arguments based
 * upon environment variables
 * @param {Function} cb
 */
function build(cb) {
  const args = gulpConfig.hugoArgs.default.concat(
    gulpConfig.hugoArgs[argsType] || []
  )
  const generator = spawn(hugo, args, {stdio: "pipe", encoding: "utf-8"})

  generator.stdout.on("data", data => {
    log(null, data.toString(), "Hugo")
  })

  generator.stderr.on("data", data => {
    log(null, data.toString(), "Hugo")
  })

  generator.on("error", err => {
    log(err, err.toString(), "Hugo")
    cb("Build failed")
  })

  generator.on("close", code => {
    browserSync.reload()
    cb()
  })
}

/**
 * Logs errors and messages to the
 * console
 *
 * @param {Error} err
 * @param {String} log
 * @param {String} name
 */
function log(err, log, name) {
  const messages = log.replace(/^,|,$/g, "").split("\n") // Get rid leading/trailing commas
  const spacer = " ".repeat(name.length + 2) // Indent additional lines

  if (err) {
    util.beep()
    browserSync.notify(err.message)
  }

  messages.forEach((message, i) => {
    if (i === 0) {
      util.log("[" + util.colors.blue(name) + "]", message)
    } else {
      util.log(spacer, message)
    }
  })
}
