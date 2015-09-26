var gulp = require('gulp'),     
    sass = require('gulp-ruby-sass') ,
    notify = require("gulp-notify") ,
    uglify = require('gulp-uglify'),
    fs = require('fs'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');


// compile sass
gulp.task('sass', function () {
    return sass('src/vhs.scss',{
        compass: true,
        style: 'compressed'
    })
    .pipe(rename("demo.css"))
    .pipe(gulp.dest('demo'));
});


// build the demo
gulp.task('build', function () {
    return gulp.src('src/vhs.html')
        .pipe(replace('%STYLE%', '<style>' + fs.readFileSync('demo/demo.css', 'utf8') + "</style>"))
        .pipe(replace('\n', ''))
        .pipe(size({
            title: 'Demo size:',
            pretty: false
        }))
        .pipe(rename("index.html"))
        .pipe(gulp.dest('demo'));
});


// watch files
gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['sass', 'build']);
});


// Default Task
gulp.task('default', ['sass', 'watch', 'build']);