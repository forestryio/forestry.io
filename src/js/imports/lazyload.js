import lazysizes from "lazysizes"

const isProduction = process.env.NODE_ENV === "production"

/**
 * Lazy loads images when they are in viewport or close
 * to coming into the viewport, to save bandwidth and
 * handle animations
 * https://www.npmjs.com/package/lazysizes
 */

