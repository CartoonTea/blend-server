var gulp = require('gulp');
var del = require('del');

gulp.task('clean', [], function (cb) {
  del(['build'], cb);
});

gulp.task('default', ['clean'], function (cb) {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('build/'));
});