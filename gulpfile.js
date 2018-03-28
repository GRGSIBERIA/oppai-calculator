'use strict';
 
const gulp = require("gulp");
const ts = require('gulp-typescript');
const pug = require('gulp-pug');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const ps = require('child_process').execSync;
const fs = require('fs');
 
const webpackConfig = require("./webpack.config");
 
// メインプロセス側
const tsProject = ts.createProject('tsconfig.json', () => {
    typescript: require('typescript')
});
 
gulp.task('compile-ts', () => {
    const options = {
    };
 
    return gulp.src('src/main/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist/main'));
});
 
gulp.task('compile-pug', () => {
    return gulp.src('src/renderer/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/renderer'));
});
 
gulp.task('compile-renderer', () => {
    return webpackStream(webpackConfig, webpack).pipe(gulp.dest("dist"));
});
 
gulp.task("build", ['compile-ts', 'compile-pug', 'compile-renderer'], () => {
});
 
gulp.task("run", ["build"], () => {
    return ps('./node_modules/.bin/electron .');
});
 
gulp.task("default", ['build'], () => {
});