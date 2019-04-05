var gulp = require('gulp');
var sass = require('gulp-sass');

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

gulp.task('default', gulp.series('copy_assets', 'sass.gov', 'sass.pe'));