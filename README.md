# Webpack frontend skeleton

## Initialization

It's common webpack project, for future usage you should install node.js and
run:

> npm install

## Usage

For building your bundle you must run:

> webpack

or use npm scripts

> npm run build

### Scripts

It's configuration uses environment separation. For settings special environment
you must set `NODE_ENV`. The default environment is `development`.

**Package scripts:**

| Comman         | Description                                     |
| -------------- | ----------------------------------------------- |
| start          | Start the development server.                   |
| build          | Build your bundles with unassigned environment. |
| watch          | Watch changes with unassigned environment.      |
| eslint         | Check your project with eslint.                 |
| eslint:fix     | Fix project conflicts with eslint.              |
| prettier       | Handle application files with Prettier.         |
| prettier:write | Write handling of Prettier in your source.      |

**Example**

For running webpack for watching with production configuration you can enter:

> NODE_ENV=production npm run watch

## Project structure

| Path             | Description                         |
| ---------------- | ----------------------------------- |
| /app             | Your application                    |
| /app/assets      | Assets (such as fonts, images, etc) |
| /app/javascripts | Common JS scripts                   |
| /app/helpers     | Handlebars helpers                  |
| /app/pages       | Pages with html & handlebars syntax |
| /app/partials    | Handlebars partials                 |
| /app/stylesheets | Common stylesheets                  |
| /app/app.js      | Application entry point             |
| /config          | Webpack configuration               |
| /dist            | Webpack bundle                      |
| /vendor          | Vendor libs                         |

## Examples

TODO
