/*
 * gulp build file
 *
 * to use: 
 *    `npm install gulp gulp-clean-css gulp-replace read-file`
 *    `gulp`
 *
 * gulp will OVERWRITE the build files, so make sure that is what you want to do!
 */

var gulp = require('gulp'),
    gulp_replace = require('gulp-replace'),
    gulp_clean_css = require('gulp-clean-css');

var read = require('read-file');


// minifies css files and outputs them to build/css/*.css
gulp.task('clean_css', function() {
    return gulp.src('src/css/*.css')
        .pipe(gulp_clean_css())
        .pipe(gulp.dest('css/'));
});

/*
 * header and footer "templates"
 */

// add header, footer to all html pages in 'src' (index, vote)
gulp.task('header_footer', function() {
    var footer_anchor = '<!-- Footer -->';
    var footer_text = read.sync('src/template/footer.html');

    var header_anchor = '<!-- Header -->';
    var header_text = read.sync('src/template/header.html');

    return gulp.src(['src/*.html'])
        .pipe(gulp_replace(header_anchor, header_anchor + header_text))
        .pipe(gulp_replace(footer_anchor, footer_anchor + footer_text))
        .pipe(gulp.dest(''));
});

// add the footer to all topic pages
gulp.task('header_footer_topic', function() {
    var header_anchor = '<!-- Header -->';
    var header_text = read.sync('src/template/header.html');

    var footer_anchor = '<!-- Footer -->';
    var footer_text = read.sync('src/template/footer.html');

    return gulp.src(['src/topic/*.html'])
        .pipe(gulp_replace(header_anchor, header_anchor + header_text))
        .pipe(gulp_replace(footer_anchor, footer_anchor + footer_text))
        .pipe(gulp.dest('topic/'));
});

gulp.task('default', ['clean_css', 'header_footer', 'header_footer_topic']);