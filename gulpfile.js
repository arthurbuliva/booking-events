'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

// task: gulp
gulp.task('default', function () {
    gulp.start('serve', 'minify');
});
