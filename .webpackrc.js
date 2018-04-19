// Learn more about configuring Webpack
// https://webpack.js.org/concepts/
import dotenv from "dotenv"
import fs from "fs"
import webpack from "webpack"

/**
 * Load env vars from .env if available
 */
dotenv.config()

export default function(env) {
  const isProduction = (env === "production") || (process.env.NODE_ENV === "production")

  return {
    output: {
      path: __dirname + "/js/",
      filename: "[name].js"
    },
    externals: {
      // Any third-party deps added via a <script> tag
      // can be defined here so that they can be required
      // in your application's JS files
      "instantsearch.js": "instantsearch",
      "moment": "moment"
    },
    resolve: {
      // Can be used to create aliases for imports
      // modules: path.resolve(__dirname, 'src/js/example/utilities/')
      // => import * from "utilities/filename"
    },
    module: {
      rules: [
        {
          // Enables ES6 syntax for JS
          loader: "babel-loader",
          test: /\.js?$/,
          exclude: /node_modules/,
          query: {cacheDirectory: true}
        },
        {
          // Enable importing HTML files
          test: /\.(html)$/,
          use: {
            loader: "html-loader",
            options: {
              attrs: [":data-src", ":data-srcset"]
            }
          }
        }
        // TODO: add eslint-loader to fail builds
        // with invalid browser code
      ]
    },
    devtool: (isProduction) ? "nosources-source-map" : "cheap-eval-source-map",
    plugins: [
      new webpack.ProvidePlugin({
        // Automatically make packages available
        // without having to require them
        fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }),
      new webpack.EnvironmentPlugin({
        // Provide enviroment variable defaults
        // from .env.js
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY
      })
    ]
  }
}

