'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: img
gulp.task('img', function() {
    return gulp.src('./source/img/*.{jpg,jpeg,png,gif,svg}')
    .pipe(gulp.dest('./local/img'))
    .pipe(livereload())
    .pipe(notify({message: '   ### IMG COMPLETE ###'}));
});