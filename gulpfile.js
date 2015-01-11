var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

gulp.task('clean', function (cb) {
  del(['build'], cb);
});

gulp.task('env', function (cb) {
  return gulp.src('.env')
    .pipe(rename('env.json'))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['clean', 'env'], function (cb) {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('build/'));
});

gulp.task('default', function (cb) {
  runSequence('clean', 'build');
});