'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: cssminify
gulp.task('cssminify', function () {
    return gulp.src('./source/css/*.scss')
    .pipe(plumber())
    .pipe(sass({indentedSyntax: true, includePaths: ['source/css/*/']}))
    .pipe(autoprefixer(
        'last 2 version',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
    ))
    .pipe(minifycss())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./remote/css'))
    .pipe(livereload())
    .pipe(notify({message: '   ### CSSMINIFY TASK COMPLETE ###'}));
});
