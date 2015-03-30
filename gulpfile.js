var gulp = require('gulp'),
    myth = require('gulp-myth'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    ghPages = require('gulp-gh-pages'),

    // Node Modules
    beep = require('beeper'),

    // Source Files
    css = ['src/cinch.css'];

gulp.task('styles', function () {
    gulp.src(css)
        .pipe(gulp.dest('dist'))
        .pipe(myth())
        .pipe(minify())
        .pipe(rename('cinch.lib.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('site/templates/css'));
});

gulp.task('watch', function () {
    gulp.watch(css, ['styles']);
});

gulp.task('default', ['styles', 'watch']);
