'use strict';

var gulp = require('gulp');

// task: serve code
gulp.task('serve', ['cleanlocal'], function() {
    gulp.start('html', 'css', 'js', 'img', 'vid', 'fonts');
});
