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
  const isProduction = (env === "production") || (process.env.NODE_ENV === "production")

  return {
    "server": {
      "baseDir": [gulpConfig.tmp, gulpConfig.build],
      "middleware": isProduction ? [require("compression")()] : []
    },
    "https": false,
    "injectChanges": true,
    "notify": true,
    "open": false,
    "port": 3000,
    "reloadThrottle": 300,
    "reloadDelay": 300
  }
}
