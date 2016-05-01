'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const paths = ['*.js', 'lab-kyle/lib/*.js', 'lab-kyle/test/*.js'];

gulp.task('lint', function() {
  return gulp.src(paths)
    .pipe(eslint(
      {
        'rules': {
          'no-console': 0,
          'indent': [
            2,
            2
          ],
          'quotes': [
            2,
            'single'
          ],
          'linebreak-style': [
            2,
            'unix'
          ],
          'semi': [
            2,
            'always'
          ]
        },
        'env': {
          'es6': true,
          'node': true,
          'browser': true
        },
        'globals': {
          'describe': false,
          'it': false,
          'beforeEach': false,
          'afterEach': false,
          'before': false,
          'after': false
        },
        'ecmaFeatures': {
          'modules': true,
          'experimentalObjectRestSpread': true,
          'impliedStrict': true
        },
        'extends': 'eslint:recommended'
      }
    ))
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(paths)
  .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(['lab-kyle/lib/**', 'lab-kyle/test/**'], ['test', 'lint']);
});

gulp.task('default', ['lint', 'test', 'watch']);
