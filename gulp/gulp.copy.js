const project = require('./gulp.config').project;

const args 						= require("yargs").argv;
const gulp 						= require("gulp");


function copy (cb) {
	const projectType = project.find( obj => obj.name === args.template);

	function taskCopy() {
		return new Promise((resolve,reject) => {
			return gulp
				.src([`${projectType.paths.global_style}`, `${projectType.paths.project_style}`])
				.pipe(gulp.dest(`${projectType.paths.temp}`))
				.on('end', () => resolve());
		});
	}

	taskCopy.displayName = `Copying - ${projectType.name}`;

	return gulp.series(taskCopy, (copyDone) => {
		copyDone();
		cb();
	})();
};

copy.description = 'Copy all directories into the temp for compile';

exports.copy = copy;