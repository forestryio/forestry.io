// Full list of options:
// http://www.browsersync.io/docs/options/
import dotenv from "dotenv"
import GulpConfig from "./gulp.config"

/**
 * Load env vars from .env if available
 */
dotenv.config()

export default function(env) {
  const gulpConfig = GulpConfig()
  const isProduction =
    env === "production" || process.env.NODE_ENV === "production"
  const host = process.env.PREVIEW_IP || null
  const port = process.env.PREVIEW_PORT || 3000

  return {
    server: {
      baseDir: [gulpConfig.tmp, gulpConfig.build],
      middleware: isProduction ? [require("compression")()] : []
    },
    https: false,
    injectChanges: true,
    notify: true,
    open: false,
    port: port,
    host: host,
    reloadThrottle: 300,
    reloadDelay: 300
  }
}
