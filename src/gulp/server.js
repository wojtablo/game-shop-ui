'use strict';

const browser = require('browser-sync');

module.exports = function (gulp, config) {

	gulp.task('server', function () {
		browser.init({
			//server: 'dist',
			port: config.app.browsersync.port,
			ui: {
				port: config.app.browsersync.ui.port
			},
			proxy: {
				target: config.app.domain,
				middleware: function (req, res, next) {
					//console.log(req.url);
					next();
				}
			}
		});
	});

	gulp.task('reload', function () {
		browser.reload();
	});

	gulp.task('watch', ['scripts', 'server'], function () {
		gulp.watch([config.app.assets.scripts], ['scripts', 'reload']);
		gulp.watch([config.app.assets.styles], ['styles', 'reload']);
		gulp.watch([config.app.assets.pages], ['reload']);
	});

};
