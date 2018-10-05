var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['copy_assets', 'sass.gov', 'sass.pe'], function() {
  // place code for your default task here
});

gulp.task('copy_assets', function() {
  // place code for your default task here
  gulp.src(['node_modules/govuk-frontend/assets/**'])
  .pipe(gulp.dest('lib/assets'));

  gulp.src(['node_modules/govuk-frontend/*.js'])
  .pipe(gulp.dest('lib/js'))

});

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