let gulp = require('gulp');
let webpack = require('gulp-webpack');
let webpackConfig = require('./webpack.config.js')

gulp.task('default',function(){
	gulp.run('webpack')
})

gulp.task('webpack',function(){
	gulp.src('index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
})