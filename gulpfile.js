var gulp = require('gulp'),
    myth = require('gulp-myth'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    ghPages = require('gulp-gh-pages'),

    // Node Modules
    del = require('del');

gulp.task('project', function () {
    gulp.src(['src/cinch.css'])
        .pipe(gulp.dest('dist'))
        .pipe(myth())
        .pipe(minify())
        .pipe(rename('cinch.lib.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('site', function () {
    gulp.src(['src/cinch.css', 'src/site.css'])
        .pipe(concat('site.css'))
        .pipe(myth())
        .pipe(gulp.dest('site/templates/css'));
});

gulp.task('deploy', function () {
    gulp.src('site/output')
        .pipe(ghPages());
});

gulp.task('clean', function () {
    del('dist/*');
    del('site/templates/css/*');
});


gulp.task('watch', function () {
    gulp.watch(['src/cinch.css', 'src/site.css'], ['project', 'site']);
});

gulp.task('default', ['project', 'site', 'watch']);
