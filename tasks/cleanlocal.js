'use strict';

var gulp = require('gulp');
var del = require('del');

// task: clean
gulp.task('cleanlocal', function(cu) {
    del(['./local/*', './local'], cu);
});