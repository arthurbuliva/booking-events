'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');


// task: watch
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('source/*.html', ['html']).on('change', livereload.changed);
    gulp.watch('source/css/**/*.{scss,css}', ['css']).on('change', livereload.changed);
    gulp.watch('source/js/**/*.js', ['js']).on('change', livereload.changed);
    gulp.watch('source/img/**/*.{jpg,jpeg,png,gif,svg}', ['img']).on('change', livereload.changed);
});
