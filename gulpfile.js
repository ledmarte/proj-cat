const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');

function browsersync() {
  browserSync.init({
    server: {baseDir: 'src/'},
    notify: false,
    online: true
  })
}

exports.server = browsersync;



