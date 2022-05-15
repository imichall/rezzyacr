/* START Vars */
const { compile, cacheCss } = require("./gulp/gulp.compile");
const { clean } = require("./gulp/gulp.clean");
// const { copy } = require("./gulp/gulp.copy");
const { browsersyncServe, watcher, watchJS } = require("./gulp/gulp.watch");
const { scripts, cacheJs } = require("./gulp/gulp.js");

const { series } = require('gulp');

module.exports.compile = compile;
module.exports.scripts = scripts;
module.exports.cacheCss = cacheCss;
module.exports.cacheJs = cacheJs;

exports.scripts = scripts;

exports.build = series(
	clean,
	compile,
	scripts,
	cacheCss,
	cacheJs,
);

exports.watch = series(
	browsersyncServe,
	watcher,
);

exports.watcherjs = watchJS;

