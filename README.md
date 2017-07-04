# Job Compare - Client
Client-side application for Job Compare.

## TL;DR
* Use UNIX-based terminals
* Learn Node.js, React.js, Redux, and ES6 syntax
* To install - `npm install`
* To start - `npm start`
* To test - `npm test`
* To check coding styles - `npm run lint`
* To compile for production - `npm run compile`
* Read [Rules of Thumb](https://github.com/JobCompare/jc-client/wiki/Rules-of-Thumb) wiki page
* Read [Project File Structure](https://github.com/JobCompare/jc-client/wiki/Project-File-Structure) wiki page

## Setup
1. Make sure you have access to UNIX/POSIX commands (i.e. Windows OS may need [cygwin](https://www.cygwin.com/) or a VM)
2. Download and/or install [Node.js](https://nodejs.org/en/) (v7.8.0). If you have previously installed Node.js, you may use [nvm](https://github.com/creationix/nvm) to change your node version locally.
3. Clone this repo: `git clone https://github.com/JobCompare/jc-ui.git`
4. Install dependencies: `npm install`
5. To start this application, `npm start`. By default, it should use `http://localhost:3000` for local development.

## Prerequisites
JobCompare attempts to follow modern practices of web (as of late 2016).
In order to execute these practices properly, clear understanding of ES6 and Node.js is required.
### ES6 and Coding Style
Prior to development, it is highly recommended that you have strong knowledge in ECMAScript6 (or ES6).
This project will use [Airbnb's Javascipt Style Guide](https://github.com/airbnb/javascript) as a base.
All client-side code under ``app`` directory must follow this style guideline.
Please use `eslint` script to confirm that your code is using correct syntax.
```
./node_modules/.bin/eslint <filename>
```
### Package Management
JobCompare uses [Node.js](https://nodejs.org/en/) (v7.8.0) as a main package manager.
Understanding Node.js can help significantly during development.
Feel free to use `nvm` to manage your Node.js version locally.
```
nvm use
```

## Tech Stack
* **Package Management:** [Node.js](https://nodejs.org/en/)
* **Architecture:** [Redux](http://redux.js.org/)
* **View:** [React.js](https://facebook.github.io/react/)
* **Server:** [Express.js](https://expressjs.com/)
* **Test:** [Jest](https://facebook.github.io/jest/)
* **Build:** [Webpack](https://webpack.github.io/)

### Package Management
Please refer to "Prerequisites" section above as well as `package.json`.

### Architecture + View
The core of this application is being built with the combination of React and Redux.
React will as as a "view" part of Redux architecture.
To understand the high-level flow of Redux framework, start with understanding [Flux](https://facebook.github.io/flux/).

### Server-Side Script
Server-side script's job to host client-side application.
Using Express.js, client-side application can not only emulate production-level code, but can improve development process as well (i.e. hot build webpack with middleware control).
However, vast majority of routing and endpoints will be defined by [React Router](https://www.npmjs.com/package/react-router).

### Testing
To easily integrate test automation with React, [Jest](https://facebook.github.io/jest/) has been chosen as the main testing framework.
For those of you with prior experience in Mocha or Jasmine, you can also easily use Jest since they follow similar paradigms.

To execute test, type `npm run test`.

### Build
As recommended by React, [Webpack](https://webpack.github.io/) will be build and compilation tool for client-side application under `app` directory.
Webpack (with help of [Babel](https://babeljs.io/)) will compile ES6 and JSX syntax into more browser compatible code.
Note that the build process may take up to 5 seconds.

For development stage, the code will be compiled during runtime when typing `npm start`.

For production stage, the code needs to be compiled prior to runtime by typing `npm run compile`.

## Other Tools
* [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) - type checker for React component prop values
* [Chart.js](http://www.chartjs.org/) - simple and easy-to-use data visualization tool
* [Lodash](https://lodash.com/) - collection of Javascript functions and utilities
* [Request](https://github.com/request/request) - simple HTTP request tool
* [Immutable](https://facebook.github.io/immutable-js/) - collection of immutable data structures
* [Normalize.css](https://necolas.github.io/normalize.css/) - cross-browser CSS resets
* [Autoprefixer](https://github.com/postcss/autoprefixer) - automatically puts browser prefixes on CSS rules

## Git
JobCompare application will have some specific guidelines for using git.
### Branches
* Any feature implementation must be its own branch
* Any pull request should be sent to "development" branch (not to "master")
* Delete any branch that will not be used in future
### Pull
* Please pull with rebase after your commit: `git pull --rebase origin development`
* If any merge conflict occurs, please fix them locally before sending a pull request
### Push
* Make sure your commits are squashed prior to push: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
* Push to your feature branch
* DO NOT force push
### Summary of Git
* After commit your change: `git pull --rebase origin <branch_name>`
* `git rebase -i <commit_before_your_target_of_squash>`
* Handle merge conflicts, push to feature branch.
### Recommended Git Tools
* [SourceTree](https://www.sourcetreeapp.com/) or [GitX](http://gitx.frim.nl/)

## Useful Links
* https://caniuse.com/ - website use to check browser compatibility of CSS and Javascript features

## UI Guideline
JobCompare's client-side application will strictly follow color palettes, fonts, and icon mentioned in following screenshot:

Screenshot TBA
