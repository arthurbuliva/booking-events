'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var maps = require('gulp-sourcemaps');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var livereload = require('gulp-livereload');

// task: css
gulp.task('css', function () {
    return gulp.src('./source/css/*.scss')
    .pipe(plumber())
    .pipe(maps.init())
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
    .pipe(plumber.stop())
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('./local/css'))
    .pipe(livereload())
    .pipe(notify({message: '   ### CSS COMPLETE ###'}));
});
