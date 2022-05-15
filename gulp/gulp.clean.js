const project = require('./gulp.config').project;

const args 						= require("yargs").argv;
const del 						= require("del");

function clean () {
	const projectType = project.find( obj => obj.name === args.template);
	console.log(`Cleaning the ${projectType.name} project`);

	return del(`${projectType.paths.build_style}`, { force: true });
};

clean.description = 'Delete all temp-* files and folders';

module.exports.clean = clean;