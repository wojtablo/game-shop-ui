const fs = require('fs');
const gulp = require('gulp');

const CONFIG = {
	server: {
		domain: 'frontstarter.host', // <----- Change to your localhost vhost if you want to use Browser-Sync
		port: {
			website: 3000,
			panel: 3001
		},
	},
	assets: {
		images: './gfx/',
		styles: './styles/**/*.scss',
		scripts: './scripts/**/*.js',
		pages: '../*.html'
	},
	public: {
		dir: '../dist/s/',
		images: '../dist/s/gfx/',
		styles: '../dist/s/css/',
		scripts: '../dist/s/js/'
	}
};

// Require all task files in gulp directory
fs.readdirSync('./gulp').filter(function(file) {
	return (/\.(js)$/i).test(file);
}).forEach(function(file) {
	require('./gulp/' + file)(gulp, CONFIG);
});
