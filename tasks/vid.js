'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: img
gulp.task('vid', function() {
    return gulp.src('./source/vid/*')
    .pipe(gulp.dest('./local/vid'))
    .pipe(livereload())
    .pipe(notify({message: '   ### VID COPIED ###'}));
});