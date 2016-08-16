'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var maps = require('gulp-sourcemaps');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var livereload = require('gulp-livereload');

// task: js
gulp.task('js', function () {
    return gulp.src([
        'vendor/jquery/dist/jquery.min.js',
        'vendor/bowser/bowser.min.js',
        'vendor/flexibility/dist/flexibility.js',
        'vendor/jquery-ui/jquery-ui.js',
        'source/js/bowser.js',
        'source/js/scripts.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(maps.init())
    .pipe(plumber.stop())
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('./local/js'))
    .pipe(livereload())
    .pipe(notify({message: '   ### JS COMPLETE ###'}));
});
