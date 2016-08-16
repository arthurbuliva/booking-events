'use strict';

var gulp = require('gulp');
var del = require('del');

// task: clean
gulp.task('clean', function(cu) {
	del(['./local', './remote/'], cu);
});
