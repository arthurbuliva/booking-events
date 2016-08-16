'use strict';

var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: imgminify
gulp.task('imgminify', function() {
    return gulp.src('./source/img/*.{jpg,jpeg,png,gif,svg}')
    .pipe(plumber())
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./remote/img'))
    .pipe(livereload())
    .pipe(notify({message: '   ### IMGMINIFY TASK COMPLETE ###'}));
});