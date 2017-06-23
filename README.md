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

| Comman     | Description                                       |
|------------|---------------------------------------------------|
| start      | Start the development server.                     |
| build      | Build your bundles with unassigned environment.   |
| watch      | Watch changes with unassigned environment.        |
| eslint     | Check your project with eslint.                   |

**Example**

For running webpack for watching with production configuration you can enter:

> NODE_ENV=production npm run watch

## Project structure

TODO
