# Hugo Boilerplate
**A Hugo boilerplate for building modern websites 🌲**

TThis boilerplate wraps [Hugo](gohugo.io) with [Gulp](https://gulpjs.com/) as your asset pipeline.

[PostCSS](http://postcss.org/) and [Webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/) are used for CSS and JS compiling & transpiling.

[ImageMin](https://github.com/imagemin/imagemin) is used to optimize and compress images, and [SVG Sprite](https://github.com/jkphl/svg-sprite) is used to generate a SVG Sprite.

[BrowserSync](https://www.browsersync.io/) is used for providing a modern local development experience, allowing you to preview your site on multiple devices in sync.

[BrowsersList](https://github.com/ai/browserslist) is used for configuring Browser support.

# Installation

## Prerequisites
To use Gulp, you must have [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) installed.

## Setup

Once the prerequisites are installed, clone the repository to your local machine, and then run:

```
npm install
```

This will install Hugo as well as all of the Node dependencies needed to run your Hugo environment. This may take a little while!

# Development
All development tasks are performed using npm run. See `"scripts"` in [package.json](/package.json) for a full list of commands.

## Local Development

Local development is powered by BrowserSync, you will be able to develop sites rapidly through:

- A local development server at `http://localhost:3000/`.
- Automatic CSS & JS updates without reloading the page
- Automatic page reloads when content is changed

Running the local development server is as simple as running:

```
npm start
```

*This will display all draft, future-dated, or expired content, which is not included in your production build.*

If you'd like to develop with the site as it will appear in production, run:

```
npm run preview
```

## Production Build

To generate a final production build on your local machine you can run:

```
npm run build
```
*The fresh production build of your site will end up in the `dist/` directory.*

# Project Structure
```
.
├── .tmp/                  // Temporary directory for development server
├── dist/                  // The production build
├── hugo/                  // The Hugo project, with all content and static files
|   ├── .forestry/         // Contains Forestry.io configuration files
|   ├── content/           // Where all site content is stored 
|   ├── data/              // TOML, YAML or JSON files containing site data 
|   ├── layouts/           // Your site's layouts
|   |   ├── partials/      // Your site's partials
|   |   └── shortcodes/    // Your site's shortcodes
|   ├── static/            // Where all static files live
|   |   ├── css/           // Where compiled CSS files live
|   |   ├── js/            // Where compiled JS files live
|   |   ├── img/           // Where theme images live
|   |   └── uploads/       // Where user uploads are stored
|   └── config.toml        // The Hugo configuration file
└─── src/
     ├── css               // CSS source files to be compiled to /css/
     ├── scss              // Sass source files to be compiled to /css/
     ├── js                // JS source files to be compiled to /js/
     └── img               // Unoptimized raw image source files to be compiled to /img/
```

# Images
Images found in `src/img/` will be optimized and compressed and sent to `jekyll/img/` for usage in your layouts and content.

# Inline SVG
Any SVGs found in `src/img/` will be combined into a single SVG Sprite at `jekyll/partials/sprite.symbol.svg`

This can then be used in content or layouts as a Jekyll partial:

```
// todo
```

# Testing
This boilerplate comes with standard [ESLint](https://eslint.org/) and [StyleLint](https://github.com/stylelint/stylelint) configurations that will lint your CSS and JS for errors or common style issues, which work with most popular IDEs.

The tests can also be run from the command line:

- **JS:** `npm run eslint`
- **CSS:** `npm run stylelint`

If you want to automatically fix lint errors, you can do this from the command line as well:

- **JS:** `npm run eslint:fix`
- **CSS:** `npm run stylelint:fix`

# Cleanup

This boilerplate is self-cleaning, and will remove the production `dist/` and development `.tmp/` folders every time a command is run to ensure that their contents are always up to date.

If you wish to manually cleanup, run:

```
npm run clean
```

# Configuration
All build tasks are handled by Gulp and are located in `gulpfile.babel.js`. All parts of the build are configurable in discrete files to make management easy.

## Paths
All build source and destination paths can be configured from `gulp.config.js`.

## Hugo
The build commands for Hugp can be configured from `gulp.config.js`. Build commands are set based on the `NODE_ENV` environment variable.

Four options are available:
- `default`: the default build commands that are always run
- `development`: additional build commands for the development server
- `production`: additional build commands for production builds and preview server

## BrowserSync Development Server
The configuration for BrowserSync is found in `browsersync.config.js`

## CSS/SASS
The configuration for PostCSS is found in `postcss.config.js`

## Javascript
The configuration for Webpack is found in `webpack.config.js`

## Browser support
Both PostCSS and Webpack use `.browserslistrc` to decide on browser support when compiling.

# Tips & Resources

- To learn about how to develop with Hugo, see [Hugo's documentation](http://gohugo.io/getting-started/directory-structure/)
- To learn how to use Hugo's templating system, see the [documentation](http://gohugo.io/templates/introduction/)
- Static files should be stored in the `hugo/static/` folder as they should appear in the built site
  *E.g, a CNAME file should be stored at `hugo/static/CNAME` to become `/CNAME`*
- Javascript files are compiled from the root of `src/js/` to `js/{filename}.js`
  - Javascript can be written using ES6, supporting `require()` and `import` statements from npm packages and local JS files
- CSS files are compiled from the root of `src/css/` to `css/{filename}.css`
  - Import statements are resolved and included in the compiled CSS files
- For compatibility with Forestry or other CMSs, ensure that compiled CSS and JS files in the `hugo/` folder are always committed
- Environment variables are provided to your templates, which can be accessed in templates as follows: `{{ getenv "HUGO_ENV" }}`
  - For development pipelines, this is equal to `development`
  - For production pipelines, this is equal to `production`
  - For Forestry's in-app preview feature, this is equal to `staging`

# Using with Forestry
This repository comes with basic example content pre-configured to work with Forestry, which you can use to start building your site.

- Fork this repository to your account
- [Sign up for a Forestry account](https://app.forestry.io/signup), and import this repository as an "Existing Site"
- When prompted for the "Project root", enter `hugo`

## Licensing
This boilerplate project is released under the [MIT license](/LICENSE).
