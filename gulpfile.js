var gulp = require('gulp'),
    myth = require('gulp-myth'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    ghPages = require('gulp-gh-pages'),

    // Node Modules
    del = require('del');

gulp.task('project', function () {
    return gulp.src(['src/cinch.css'])
        .pipe(gulp.dest('dist'))
        .pipe(myth())
        .pipe(minify())
        .pipe(rename('cinch.lib.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('site', function () {
    return gulp.src(['src/cinch.css', 'src/site.css'])
        .pipe(concat('site.css'))
        .pipe(myth())
        .pipe(gulp.dest('site/templates/css'));
});

gulp.task('deploy', function () {
    return gulp.src('site/output/**/*')
        .pipe(ghPages({
            cacheDir: "site/cache"
        }));
});

gulp.task('clean', function () {
    del('dist/*');
    del('site/templates/css/*');
});


gulp.task('watch', function () {
    gulp.watch(['src/cinch.css', 'src/site.css'], ['project', 'site']);
});

gulp.task('default', ['project', 'site', 'watch']);
