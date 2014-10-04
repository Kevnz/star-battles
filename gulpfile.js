var gulp = require('gulp'),
    jshint = require('gulp-jshint'), 
    browserify = require('browserify'),
    livereload = require('gulp-livereload');

var source = require('vinyl-source-stream');
 
 
 
gulp.task('browserify-dev', function () {
 
    return browserify({ entries:['./src/game.js'],debug: true })
        .transform('browserify-shim')
        .bundle()
        .on('error', function (e) {
            console.log('browserify error');
            console.log(arguments);
            throw e;
        })
        .pipe(source('start.js'))
        .pipe(gulp.dest('./public/js')) 
        .on('end', function () {
            console.log('ended');
        });
});

gulp.task('browserify-prod', function () {
 
    return browserify({ debug: true,entries:['./public/js/game.js']
        })
        .transform('es6ify')
        .transform('stripify')
        .transform( 'uglifyify')
        .bundle()
        .on('error', function () {
            console.log('browserify error');
            console.log(arguments);
        })
        .pipe(source('start-min.js'))
        .pipe(gulp.dest('./public/js')) 
        .on('end', function () {
            console.log('ended');
        });
});


gulp.task('build' , ['browserify-dev','browserify-prod'])
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['./public/js/game.js','./public/js/game/*.js', './public/js/game/**/*.js'], ['browserify-dev','browserify-prod'])
        .on('change', livereload.changed);
    //gulp.watch(paths.images, ['images']);
});