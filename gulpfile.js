const gulp = require('gulp');
const sequence = require('gulp-sequence');

require('file-manifest').generate('./gulp', { match: '*.js' });

gulp.task('cover', gulp.series('clean:coverage', 'instrument', 'test:cover'));
gulp.task('travis', gulp.series(gulp.parallel('lint', 'cover', 'phantom'), 'codeclimate'));
gulp.task('test', gulp.series('cover', 'browser'));
gulp.task('default', gulp.series('lint', 'test'));
gulp.task('build', gulp.series('clean:dist', gulp.parallel('uglify')));
