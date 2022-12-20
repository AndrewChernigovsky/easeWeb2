'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pretty = require('gulp-html-pretty');

module.exports = function (options) {
	return () => {
		return gulp
			.src(`./${options.dest}/**/*.html`)
			.pipe(prettify({ indent_char: ' ', indent_size: 2 }))
			.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
			.pipe(gulp.dest(options.dest));
	};
};
