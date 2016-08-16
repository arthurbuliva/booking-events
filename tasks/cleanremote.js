'use strict';

var gulp = require('gulp');
var del = require('del');

// task: clean
gulp.task('cleanremote', function(cu) {
    del(['./remote/*', './remote'], cu);
});