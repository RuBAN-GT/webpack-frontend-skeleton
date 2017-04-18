# Webpack frontend skeleton

## Initialization

It's common webpack project, for future usage you should install node.js and run:

> npm install

## Usage

For building your bundle you must run:

> webpack

or use npm scripts

> npm run build

### Scripts

It's configuration uses environment separation. For settings special environment you must set `NODE_ENV`. The default environment is `development`.

**Npm scripts:**

* start - start development server
* build - build your bundles with unassigned environment
* build:dev - build your bundle with development configuration
* build:prod - build your bundle with production configuration
* watch - watch changes with unassigned environment

**Example**

For running webpack with watching with production configuration you can enter:

> NODE_ENV=production npm run watch

## Project structure

| Object                | Caption                                              |
|-----------------------|------------------------------------------------------|
| app/javascripts       | Coffescript files with main application.coffee file. |
| app/stylesheets       | SASS files with main application.sass file.          |
| app/pages             | Handlebars pages                                     |
| app/partials          | Partials directory                                   |
| app/helpers           | Helpers directory                                    |
| app/app.js            | Entry point for webpack with your scripts.           |
| app/vendor.js         | Entry point for webpack with vendor scripts.         |
| app/data.json         | Variables for handlebars files                       |
| config                | Separate environment webpack configurations.         |
| config/application.js | Main file with webpack configuration.                |
| vendor                | Vendor assets.                                       |
