# Leveraging Rivets & Beefy


![Rivets logo](https://raw.githubusercontent.com/jameswomack/rivets_example/master/img/rivets_logo.png)
![Beefy logo](https://raw.githubusercontent.com/jameswomack/rivets_example/master/img/beefy_logo.png) 


## Getting started
```
npm install
npm test
npm start
```


## Key Constituents

### Build / Run
* [npm](https://www.npmjs.org/)
  * Dependencies
  * Running scripts (spawning Beefy, JSHint or Mocha)
  * Dedicated script runner unnecessary for low-complexity tasks
* [beefy](https://github.com/chrisdickinson/beefy)
  * Combines `browserify`, `http.Server` & `script-injector` with a custom Live Reload script
  * Allows you to quickly prototype front-end apps using Node syntax
* [brfs](https://github.com/substack/brfs)
  * Allows you to use `fs.readFileSync` in the browser. Used in this project to load HTML+Rivets templates into `Backbone.View` heirs

### Architecture
* [rivets](http://rivetsjs.com/)
  * Lightweight data-binding
  * Lightweight templating
* [backbone](http://backbonejs.org/)

### Functional Helpers
* [jquery](http://jquery.com/)
* [underscore](http://underscorejs.org/)

### Code Quality
* [mocha](http://mochajs.org/)
  * Running tests
* [chai](http://chaijs.com/)
  * Assert/expect/should
* [jshint](http://www.jshint.com/)
  * Code quality / analysis
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
  * Pretty-printing JSHint results


## Learning From This App

#### Rivets
Type in the input field within the page launched in your browser. See that the `<h2>` above it updates. This is demonstrating a three-way binding between the `<input>`, a `Backbone.Model` and the `<h2>`. 

Let's check out the view code: `cat -n js/view.js` (or `curl -L http://is.gd/5M9ny7|cat -n` if you're an HTTP person). The most important things happening here are:
* Rivets is imported from a Rivets-Backbone importer
* A Rivets HTML template is loaded via BRFS
* A Rivets binding is created inside a once-run function inside `render`


#### Beefy / BRFS
See the output of `node -e "console.log(require('./package.json').scripts.start)"`.
  * `beefy js/index.js --live --open --index=html/index.html -- -t brfs`
    * `js/index.js` specify custom app entry point
    * `--live` Live reload
    * `--open` Launch default browser with app URL
    * `index=html/index.htm` specify custom HTML page to inject script into and load
    * `-- -t brfs` Every after `--` is passed as flags to browserify. `-t brfs` means load custom transform bfrs (for using `fs.readFileSync` browser-side.
    
#### JSHint / Stylish
See output of `node -e "console.log(require('./package.json').scripts.test.split(' && ')[0])"`
  * `jshint --reporter node_modules/jshint-stylish/stylish.js js/*.js`
    * Run jshint with the stylish reporter against all files in /js
    
#### Mocha / Chai
See output of `node -e "console.log(require('./package.json').scripts.test.split(' && ')[1])"`
  * `mocha --reporter spec --require test/unit/bootstrap.js test/unit/specs/**/*.js`
    * Run mocha with the spec reporter, loading all vars from bootstrap into all scripts in the specs folder and subfolders