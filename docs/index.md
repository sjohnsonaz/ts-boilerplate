# TS Boilerplate

[![Build Status](https://travis-ci.org/sjohnsonaz/ts-boilerplate.svg?branch=master)](https://travis-ci.org/sjohnsonaz/ts-boilerplate)

TypeScript boilerplate.

# Project Installation

This boilerplate can be used to start any TypeScript project. It also may be used for educational purposes. For a fresh installation, follow these steps.

## Install Environment

1. Install Node.js from <https://nodejs.org>.
2. Install VSCode from <http://code.visualstudio.com>
3. Install git from <https://git-scm.com>
4. Install SourceTree from <https://www.sourcetreeapp.com>
5. Clone <https://github.com/sjohnsonaz/ts-boilerplate.git>
6. Run Command Prompt (`cmd`)
    1. `npm install typescript -g`
    3. `npm install webpack -g`
    5. `npm install nodemon -g`

## Configure VSCode

1. Open Project
    1. Go to `File->Open Folder...`
    2. Open `ts-boilerplate`
2. Configure hidden folders
    1. Go to `File->Preferences->Workspace Settings`
    2. In the right pane, add a line for `"files.exclude"`
    3. Add to the bottom of the `"files.exclude"` section:
````
"node_modules/": true,
"dist/": true
````
  4. Save

## Build and Run Project

1. Run Command Prompt (`cmd`)
    1. `npm install`
    2. To compile but not build, use `tsc`
    3. To run once, use `npm run dev`
    4. To run and watch for file changes, use `npm run watch`
    5. To run once and minify, use `npm run min`

2. Run VSCode
    1. Navigate to `ts-boilerplate/src/html/index.html`
    2. Right click `index.html`
    3. Click `Reveal in Explorer`
    4. When Explorer launches, open the file in a Browser.

3. Optionally, depending on your project, you may also run in Node
    1. Run Command Prompt (`cmd`)
    2. To run once, use `npm node`
    3. To run and watch for file changes, use `npm nodemon`

## Test Project

1. Test in Browser
    1. Run VSCode
    2. Navigate to `ts-boilerplate/src/mocha/index.html`
    3. Right click `index.html`
    4. Click `Reveal in Explorer`
    5. When Explorer launches, open the file in a Browser

2. Test in Node
    1. Run Command Prompt (`cmd`)
    2. `npm test`