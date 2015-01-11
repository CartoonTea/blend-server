var gulp = require('gulp');
var del = require('del');

gulp.task('clean', [], function (cb) {
  del(['build'], cb);
});

gulp.task('build', ['clean'], function (cb) {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['build'], function (cb) {
});