var gulp      = require('gulp');
var sass      = require('gulp-sass');
var sassImage = require('gulp-sass-image');


gulp.task('sass-image', () => {
  return gulp.src('app/images/*.+(jpg|png)') // 接受 jpg, png
    .pipe(sassImage({
        targetFile: 'image_data.scss',       // 處理完的 SCSS 檔名
        css_path: './app/css',               // CSS 檔案位置
				images_path: './app/images',         // image 檔案位置
				includeData: false,                  // 是否將 image 加入到 SCSS 中
    }))
    .pipe(gulp.dest('app/cache'));           // 處理後的 SCSS 檔放位置
});

gulp.task('sass', function() {
	return gulp.src("app/scss/*.scss")
			.pipe(sass())
			.pipe(gulp.dest("build/css"));
});