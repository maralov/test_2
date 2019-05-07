var gulp           = require('gulp'),
    watch          = require('gulp-watch'),
    sass           = require ('gulp-sass'),
    autoprefixer   = require ('gulp-autoprefixer'),
    concat         = require ('gulp-concat'),
    browserSync    = require('browser-sync').create(),
    sourcemaps     = require('gulp-sourcemaps')
;
//порядок сборки файлов
// const cssFiles = [
//     './scss/reset.scss',
//     './scss/style.scss',
//     './scss/media.scss'
// ]
const path = {
    scss: {
        scss: './scss/*.scss'    
    },
    watch: {
        sass: './scss/*/*.scss'
    }
};
//task CSS
function scss() {
    return gulp.src(path.scss.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        //.pipe(concat('style.css')) //объеденяем 
        .pipe(gulp.dest('./css'))
};

gulp.task('watch', function () {
    // Endless stream mode
    return watch(path.watch.sass, gulp.series('scss'))
        // .pipe(gulp.dest('./css'));
});

//tasks
gulp.task('scss', scss);
// gulp.task('watch', watch);