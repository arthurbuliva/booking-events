'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: img
gulp.task('vidminify', function() {
    return gulp.src('./source/vid/*')
    .pipe(gulp.dest('./remote/vid'))
    .pipe(livereload())
    .pipe(notify({message: '   ### VID COPIED ###'}));
});