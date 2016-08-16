'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: img
gulp.task('fonts', function() {
    return gulp.src('./source/fonts/*')
    .pipe(gulp.dest('./local/fonts'))
    .pipe(livereload())
    .pipe(notify({message: '   ### FONTS COPIED ###'}));
});