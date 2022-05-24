const project = require("./gulp.config").project;
const js = require("./gulp.config").js_files;
const compile = require("./gulp.compile").compile;
const cacheCss = require("./gulp.compile").cacheCss;
const clean = require("./gulp.clean").clean;
const copy = require("./gulp.copy").copy;
const scripts = require("./gulp.js").scripts;
const cacheJs = require("./gulp.js").cacheJs;

const { parallel, series, src, dest, watch } = require("gulp");
const args = require("yargs").argv;
const browsersync = require('browser-sync').create();

function browsersyncServe(cb) {
	const projectType = project.find((obj) => obj.name === args.template);
		browsersync.init({
			/* server: {
				url: 'http://rezzyarc.local',
				open: false,
			} */
			proxy: projectType.proxy.url,
			open: projectType.proxy.open,
			port: projectType.proxy.port,
			logFileChanges: false,
			ui: {
				port: projectType.proxy.ui.port,
			},
		});
    cb();
}

function browsersyncReload(cb) {
	browsersync.reload();
    cb();
};

function watcher() {
	const projectType = project.find((obj) => obj.name === args.template);

	const scriptsObj = js.find((obj) => {
		projectJs = obj.project_js;
	});

	watch([projectType.paths.global_style], series(compile, cacheCss, browsersyncReload));
	watch(projectType.paths.app_dir, series(browsersyncReload));
	watch(projectJs, series(scripts, cacheJs, browsersyncReload));
}

function watchJS() {
	const scriptsObj = js.find((obj) => {
		projectJs = obj.project_js;
	});
	watch(projectJs, series(scripts, cacheJs));
}

browsersyncServe.displayName = "Server";
browsersyncReload.displayName = "Reloading browser";

// exports.sync = syncAll;
exports.browsersyncServe = browsersyncServe;
exports.browsersyncReload = browsersyncReload;
exports.watcher = watcher;
exports.watchJS = watchJS;