const config = require('./config_app');
const fs = require('fs');
const gulp = require('gulp');

// Require all task files in gulp directory
fs.readdirSync('./gulp').filter(function(file) {
	return (/\.(js)$/i).test(file);
}).forEach(function(file) {
	require('./gulp/' + file)(gulp, config);
});
