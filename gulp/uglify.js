const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const config = require('./config');

gulp.task('uglify', () => {
  return gulp.src(config.lib)
    .pipe(uglify())
    .pipe(rename('extract-json-from-string.min.js'))
    .pipe(gulp.dest('dist'));
});
