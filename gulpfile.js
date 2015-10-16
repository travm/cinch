// Gulp Plugins
var gulp = require('gulp'),
    myth = require('gulp-myth'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    ghPages = require('gulp-gh-pages'),

// Node Modules
    del = require('del');

// Project Task
gulp.task('project', function () {
    return gulp.src(['src/cinch.css'])
        .pipe(gulp.dest('dist'))
        .pipe(myth())
        .pipe(minify())
        .pipe(rename('cinch.lib.css'))
        .pipe(gulp.dest('dist'));
});

// Site Task
gulp.task('site', function () {
    return gulp.src(['src/cinch.css', 'src/site.css'])
        .pipe(concat('site.css'))
        .pipe(myth())
        .pipe(gulp.dest('site/templates/css'));
});

// Deploy Task
gulp.task('deploy', function () {
    return gulp.src('site/output/**/*')
        .pipe(ghPages({
            cacheDir: "site/cache"
        }));
});

// Clean Task
gulp.task('clean', function () {
    del('dist/*');
    del('site/templates/css/*');
});

// Watch Task
gulp.task('watch', function () {
    gulp.watch(['src/cinch.css', 'src/site.css'], ['project', 'site']);
});

// Default Task
gulp.task('default', ['project', 'site', 'watch']);
