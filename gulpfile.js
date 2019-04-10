const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('copy_assets.static', function() {
  return gulp.src(['node_modules/govuk-frontend/assets/**'])
  .pipe(gulp.dest('lib/assets'));
});
gulp.task('copy_assets.js', function() {
  return gulp.src(['node_modules/govuk-frontend/*.js'])
  .pipe(gulp.dest('lib/js'))
});
gulp.task('copy_assets', gulp.series('copy_assets.static','copy_assets.js'));

gulp.task('sass.gov', function () {
  return gulp.src('node_modules/govuk-frontend/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('lib/css'));
});

gulp.task('sass.pe', function () {
  return gulp.src('lib/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('lib/css'));
});

gulp.task('concat.js', function() {
    return gulp.src([
        './node_modules/d3/dist/d3.min.js',
        './node_modules/c3/c3.min.js',
        './node_modules/vue/dist/vue.js',
        './lib/js/all.js',
        //'./lib/js/common.js',
        './lib/js/table-chart.js'
    ])
    .pipe(concat('dist.js'))
    .pipe(gulp.dest('./lib/js'));
});

gulp.task('default', gulp.series('copy_assets', 'sass.gov', 'sass.pe', 'concat.js'));