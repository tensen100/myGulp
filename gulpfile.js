const gulp = require('gulp');
const sass = require('gulp-sass');
const cssMinify = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify'); // 压缩js
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpPrefixer = require('gulp-autoprefixer');




gulp.task('default',function () {
    console.log('hello gulp')
});

// 编译scss
gulp.task('style', function () {
    return gulp.src('./style/**/*.scss') // 获取全部的.scss文件
        .pipe(sass()) // 对样式文件进行编译
        // .pipe(concat('index.min.css')) // 合并代码
        // .pipe(cssMinify()) // 压缩代码
        .pipe(gulp.dest('./dest')) // 生成到根目录的dest文件夹下
});

// 添加前缀
gulp.task('prefixer', function () {
    return gulp.src('./style/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['> 0%'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest')) // 生成到根目录的dest文件夹下
});



gulp.task('script', function () {
    return gulp.src('./script/**/*.js')
        .pipe(concat('index.js')) // 合并代码
        .pipe(uglify()) // 压缩代码
        .pipe(gulp.dest('./dest'))
});