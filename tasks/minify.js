'use strict';

var gulp = require('gulp');

// task: minify code
gulp.task('minify', ['cleanremote'], function() {
    gulp.start('htmlminify', 'cssminify', 'jsminify', 'imgminify', 'vidminify', 'fontsminify');
});
