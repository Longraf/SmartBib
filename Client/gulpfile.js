let gulp = require('gulp'),
	clean = require('gulp-clean'),
	gulpSequence = require('gulp-sequence'),
    uglify = require('gulp-uglify'), 
    concat = require('gulp-concat'),
    csso = require('gulp-csso'), 
    sass = require('gulp-sass'),
	prefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	
	babel = require('gulp-babel'),
	include = require("gulp-include"),
	watch = require('gulp-watch');

let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let replace = require('gulp-string-replace');
let browserify = require('browserify');
let babelify = require('babelify');

let src = './src/';
//let targetPath = '../Build/Static';
let Path = '../Build/Debug/Static/';

gulp.task('html_dev', function () {
    gulp.src([
	src+'**/*.html',
	//src+'favicon.ico',
	])
	.pipe(replace(/\{\{vdt\}\}/g, '1'))
    .pipe(gulp.dest(Path))
});
gulp.task('html_prod', function () {
	let dt = new Date();
	dt = '' + dt.getDate()+'.'+dt.getMonth()+'.'+dt.getFullYear()+'_'+dt.getHours()*3600 + dt.getMinutes()*60;
    gulp.src([
	src+'**/*.html',
	//src+'favicon.ico',
	])
	.pipe(replace(`lure.css`, `lure.min.css`))
	.pipe(replace(`lure.full.js`, `lure.full.min.js`))
	.pipe(replace(/\{\{vdt\}\}/g, dt))
    .pipe(gulp.dest(Path))
});
gulp.task('img', function () {
    gulp.src([
		src+'img/**/*',
	])
	.pipe(gulp.dest(Path))
});
gulp.task('plugins', function () {
    gulp.src([
		src+'js/plugins/**/*',
	])
	.pipe(gulp.dest(Path + 'js/plugins'))
});
gulp.task('img-css', function () {
    gulp.src([
		src+'modules/**/*.jpg',
		src+'modules/**/*.png',
		src+'modules/**/*.svg',
	])
	.pipe(rename({dirname: ''}))
	.pipe(gulp.dest(Path+'css/img'))
});
gulp.task('fonts', function () {
    gulp.src([
		src+'fonts/**/*',
	])
	.pipe(gulp.dest(Path + 'fonts'))
});

gulp.task('css_prod', function () { 
	gulp.src([
		src+'modules/app.scss',
		src+'modules/auth.scss',
	])
		.pipe(sass()
			.on('error', sass.logError))
		.pipe(prefixer())
		.pipe(csso())
		.pipe(gulp.dest(Path + 'css'));
});
gulp.task('css_dev', function () { 
	gulp.src([
		src+'modules/app.scss',
		src+'modules/auth.scss',
	])
		.pipe(sourcemaps.init())
		.pipe(sass())
			.on('error', sass.logError)
		.pipe(prefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(Path + 'css'));
});

gulp.task('js_dev', function() {
	return browserify({
		entries: src+'modules/app.js',
		debug: true,
		})
		//.transform('babelify', {"presets": [  ["es2017"] ], "plugins": ["syntax-async-functions"]})
		.bundle()
		.on('error', function (error) {
			console.error(error.toString())
			this.emit('end')
		  })
		.pipe(source("app.js"))
        .pipe(gulp.dest(Path + 'js'))
});

gulp.task('js_prod', function() {
	return browserify({
		entries: src+'modules/app.js',
		debug: false,
		})
		.transform('babelify')
		.bundle()
		.pipe(source("app.js"))
		.pipe(buffer())
		.pipe(replace(`window.DEBUG = true;`, `window.DEBUG = false;`))
		.pipe(replace(`//api.timeout = xxx;`, `api.timeout = 7000;`))
		.pipe(uglify())
        .pipe(gulp.dest(Path + 'js'))
});

gulp.task('js-auth_dev', function() {
	return browserify({
		entries: src+'modules/auth.js',
		debug: true,
		})
		//.transform('babelify', {"presets": [  ["es2017"] ], "plugins": ["syntax-async-functions"]})
		.bundle()
		.on('error', function (error) {
			console.error(error.toString())
			this.emit('end')
		  })
		.pipe(source("auth.js"))
        .pipe(gulp.dest(Path + 'js'))
});
gulp.task('js-auth_prod', function() {
	return browserify({
		entries: src+'modules/auth.js',
		debug: false,
		})
		.transform('babelify')
		.bundle()
		.pipe(source("auth.js"))
		.pipe(buffer())
		.pipe(replace(`window.DEBUG = true;`, `window.DEBUG = false;`))
		.pipe(replace(`value="Admin"`, `value=""`))
		.pipe(replace(`value="pass2root"`, `value=""`))
		.pipe(uglify())
        .pipe(gulp.dest(Path + 'js'))
});

gulp.task('api.js_dev', function() {
    gulp.src([	
        src+'js/api.js'
    ])
        .pipe(gulp.dest(Path + 'js'))
});
gulp.task('api.js_prod', function() {
    gulp.src([	
        src+'js/api.js'
    ])
        .pipe(babel())
        .pipe(uglify()) 
        .pipe(gulp.dest(Path + 'js'))
});

gulp.task('lure', function () {
    gulp.src([
		src+'Lure/**/*',
	])
	.pipe(gulp.dest(Path + 'lure'))
});

gulp.task('polyfill', function() {
    gulp.src([
		'./node_modules/babel-polyfill/dist/polyfill.min.js',
        ])
        .pipe(gulp.dest(Path + 'js'))
});


gulp.task('clean', function () {
    return gulp.src([
	'./static/**/*.*', 
	'./static/**/',
	'!./static/js/api.js'

	], {read: false})
        .pipe(clean());
});

gulp.task('dev', function(){
    Path = '../Build/Debug/Static/';
  	gulp.start('_dev');
});
gulp.task('prod', function(){
    Path = '../Build/Release/Static/';
    gulp.start('_prod');
});

gulp.task('_dev', 
	gulpSequence(
	//'clean',
	'html_dev',
	'fonts',
	'img-css',
	'css_dev',
	'js-auth_dev',
	'js_dev',
	'api.js_dev',
	'lure',
	'polyfill',
	'plugins'
	));
	
gulp.task('_prod', 
	gulpSequence(
	//'clean',
	'html_prod',
	'fonts',
	'img-css',
	'css_prod',
	'js-auth_prod',
	'js_prod',
	'api.js_prod',
	'lure',
	'polyfill',
	'plugins'
	));


gulp.task('watch', function () {
    Path = '../Build/Debug/Static/';
	gulp.watch(src + 'modules/**/*.scss', ['css_dev', 'img-css']);
	gulp.watch(src + 'modules/**/*.js', ['js_dev', 'js-auth_dev']);
	gulp.watch(src + 'js/api.js', ['api.js_dev']);
});