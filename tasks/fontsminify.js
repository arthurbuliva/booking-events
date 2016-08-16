'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: img
gulp.task('fontsminify', function() {
    return gulp.src('./source/fonts/*')
    .pipe(gulp.dest('./remote/fonts'))
    .pipe(livereload())
    .pipe(notify({message: '   ### FONTS COPIED ###'}));
});