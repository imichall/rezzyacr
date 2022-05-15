const project = require('./gulp.config').project;

const {
    dest,
    series,
} 		                        = require("gulp");

const args 						= require("yargs").argv;
const autoprefixer 				= require("autoprefixer");
const cssmin 					= require("gulp-cssmin");
const gulp 						= require("gulp");
const notify 					= require("gulp-notify");
const plumber 					= require("gulp-plumber");
const postcss                   = require('gulp-postcss');
const scss 				        = require('gulp-dart-scss');
// const webpcss                   = require("gulp-webpcss");
const replace 					= require('gulp-replace');
const IS_DEV 					= args.env === "dev";
const IS_DEV_IE 				= args.env === "dev_ie";
const IS_PROD	 				= args.env === "prod";
const IS_PROD_IE	 			= args.env === "prod_ie";

function logError (err) {
	notify.onError({
		title: 'Gulp Task',
		message: '\nNalezna chyba na řádku:' + '\n' + err,
	})(err);
};

function cacheCss() {
	const projectName = project.find( obj => obj.name === args.template);
	let cacheString = new Date().getTime();

	return gulp.src([projectName.paths.app_dir])
		.pipe(
			replace(/cssbuild=\d+/g, function () {
				return "cssbuild=" + cacheString;
			})
		)
		.pipe(dest(["./www"]));
}

function compile(done) {
    const template = project.find( obj => obj.name === args.template);

		function compileProject() {

			let stream = gulp.src(`${template.paths.global_style}`)
				.pipe(plumber())
				.pipe(scss().on('error', function (err) {
					logError(err);
					this.emit('end')
				}));

			if (IS_DEV) {
				stream = stream
					.pipe(dest(`${template.paths.build_style}`));

			}

			if (IS_PROD) {
				stream = stream
					// .pipe(replace("align-items", "align-self"))
					// .pipe(postcss([ autoprefixer({grid: 'autoplace', env: "modern"}) ]))
					.pipe(cssmin())
					.pipe(dest(`${template.paths.build_style}`));
			}

			if (IS_PROD_IE) {
				stream = stream
					.pipe(replace("align-items", "align-self"))
					.pipe(postcss([ autoprefixer({grid: 'autoplace', env: "ie"}) ]))
					.pipe(cssmin())
					.pipe(dest(`${template.paths.build_style_ie}`));
			}

			return stream;
		}

		compileProject.displayName = `Build of ${template.name}!`

		// return compileProject;
		return series(compileProject, (compilingDone) => {
			compilingDone()
			done();
		})();

    done();
}

cacheCss.displayName = `Creating cache of css build`;

module.exports.compile = compile;
module.exports.cacheCss = cacheCss;