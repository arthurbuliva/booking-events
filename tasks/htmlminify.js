'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var es = require('event-stream');
var minifyhtml = require('gulp-minify-html');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// task: htmlminify
gulp.task('htmlminify', function() {
    var opts = {
        comments: false,
        conditionals: true,
        cdata: true,
        spare: true
    };
 
    return gulp.src('./source/*.html')
    .pipe(plumber())
    .pipe(minifyhtml(opts))
    .pipe(gulp.dest('./remote'))
    .pipe(plumber.stop())
    .pipe(livereload())
    .pipe(notify({message: '   ### HTMLMINIFY TASK COMPLETE ###'}));
});