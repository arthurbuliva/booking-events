'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: cssminify
gulp.task('jsminify', function () {
    return gulp.src([
        'vendor/jquery/dist/jquery.min.js',
        'vendor/bowser/bowser.min.js',
        'vendor/flexibility/dist/flexibility.js',
        'source/js/bowser.js',
        'source/js/scripts.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./remote/js'))
    .pipe(livereload())
    .pipe(notify({message: '   ### JSMINIFY TASK COMPLETE ###'}));
});
