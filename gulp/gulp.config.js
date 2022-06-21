module.exports.project = [
    {
        name: "RezzyArc",
        bs: 1,
        server: {
            baseDir: 'razzyarc.local/',
            open: false
        },
        proxy: {
            name: "RezzyArc",
            url: "razzyarc.local",
            open: false,
			port: 3000,
			logFileChanges: false,
			ui: {
                port: 3001
            }
        },
        paths: {
            global_style: 'assets/scss/**/*.scss',
            main_style: 'assets/scss/main.scss',
            build_style: 'www/build/css',
            app_dir: 'www/index.php',
        },
    },
];

module.exports.js_files = [
    {
        js_prod_path: "www/build/js",
        watch_all_scripts: "assets/js/**/*.js",
        project_js: 'assets/js/app.js',
    }
];