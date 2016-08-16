'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: html
gulp.task('html', function() {
    return gulp.src('./source/*.html')
    .pipe(gulp.dest('./local'))
    .pipe(livereload())
    .pipe(notify({message: '   ### HTML COMPLETE ###'}));
});