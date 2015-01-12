var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var ngConstant = require('gulp-ng-constant');

gulp.task('clean', function (cb) {
  del(['build'], cb);
});

gulp.task('env', function (cb) {
  return gulp.src('.env')
    .pipe(rename('env.json'))
    .pipe(gulp.dest('build/'));
});

gulp.task('env-constant', function (cb) {
  return gulp.src('.env')
    .pipe(ngConstant({
      name: 'blendConstants',
      deps: [],
      constants: {
        'client_secret': 'notFORYOU'
      }
    }))
    .pipe(rename('env.js'))
    .pipe(gulp.dest('build/static'));
});

gulp.task('build', ['clean', 'env', 'env-constant'], function (cb) {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('build/'));
});

gulp.task('default', function (cb) {
  runSequence('clean', 'build');
});