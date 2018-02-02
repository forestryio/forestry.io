// Learn more about PostCSS:
// https://github.com/postcss/postcss
var dotenv = require("dotenv")

/**
 * Load env vars from .env if available
 */
dotenv.config()

module.exports = function(ctx = {}) {
  const file = ctx.file
  const opts = ctx.options || {}
  const isProduction = (opts.env === "production") || (process.env.NODE_ENV === "production")

  return {
    parser: opts.parser ? opts.parser : "postcss-scss",
    plugins: {
      "precss": {},
      "postcss-cssnext": {},
      "postcss-cachebuster": (isProduction) ? {imagesPath: "/src", cssPath: "/src/img", type: "checksum"} : false,
      "cssnano": (isProduction) ? {autoprefixer: false} : false,
      "laggard": {},
      "postcss-reporter": {},
      "postcss-browser-reporter": (isProduction) ? {} : false
    }
  }
}
