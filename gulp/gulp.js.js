const js_files = require('./gulp.config').js_files;
const project = require('./gulp.config').project;

const {
    dest
} 		                        = require("gulp");
const gulp 						= require("gulp");
const terser 			        = require('gulp-terser-js');
const args 						= require("yargs").argv;
const replace 					= require('gulp-replace');
const rollup                    = require("gulp-better-rollup");
const babel                     = require('rollup-plugin-babel');
const resolve                   = require('rollup-plugin-node-resolve');
const commonjs                  = require('rollup-plugin-commonjs');

const IS_DEV 					= args.env === "dev";

function cacheJs() {
	const projectName = project.find( obj => obj.name === args.template);
	let cacheString = new Date().getTime();


	return gulp.src([projectName.paths.app_dir])
		.pipe(
			replace(/jsbuild=\d+/g, function () {
				return "jsbuild=" + cacheString;
			})
		)
		.pipe(dest(["./www/"]));
}

function createScripts (done) {
    for (scripts of js_files) {
        if (IS_DEV) {
			console.log(`Copying JS files to ${args.env}`);
            return gulp.src(`${scripts.project_js}`)
                .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
                .pipe(dest(`${scripts.js_prod_path}`));
        } else {
			console.log(`Copying JS files to Production`);
            return gulp.src(`${scripts.project_js}`)
                .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
                .pipe(terser())
                .pipe(dest(`${scripts.js_prod_path}`));
        }
    }

    done();
}

createScripts.displayName = `Building scripts`;
cacheJs.displayName = `Creating cache of scripts build`;

module.exports.scripts = createScripts;
module.exports.cacheJs = cacheJs;