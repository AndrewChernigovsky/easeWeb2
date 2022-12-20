'use strict';

const { src, dest } = require('gulp');
const formatHtml = require(`gulp-format-html`);
const bs = require('browser-sync');
const gulpif = require('gulp-if');

module.exports = function (options) {
	return () => {
		return src(`assets/**/*.html`)
			.pipe(formatHtml())
			.pipe(dest('assets/'))
			.pipe(gulpif(options.isProduction, dest('production/')))
			.pipe(bs.stream());
	};
};
