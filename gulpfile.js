var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {

gulp.src('scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'IE 9', 'IE 7'],
    cascade: false

}))

  .pipe(gulp.dest('./css/'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css/'));

});

gulp.task('default', function() {
  gulp.watch('scss/*.scss', ['styles']);

});
