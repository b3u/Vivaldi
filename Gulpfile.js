const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const css = cb => {
	gulp.src("scss/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(rename("style.min.css"))
		.pipe(postcss([
			require("autoprefixer"),
			require("cssnano")
		]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("css"));
	cb();
}
const watch = _cb => {
	gulp.watch('./scss/**/*.scss', css);
}

exports.watch = watch;
