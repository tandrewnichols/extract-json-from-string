var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean:coverage', function(cb) {
  rimraf('./coverage', cb);
});

gulp.task('clean:dist', function(cb) {
  rimraf('./dist', cb);
});

