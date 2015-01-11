var gulp = require('gulp');

gulp.task('default', [], function (cb) {
  gulp.src('app/**/*')
    .pipe(gulp.dest('build/'));
});