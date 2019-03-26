const
    settings = require('../../gulp.config.json'),
    src = {
      style         : settings.rootSrc + '/sass/*.scss',
      js            : settings.rootSrc + '/js/**/*.js',
      jquery        : settings.rootSrc + '/bower_components/jquery/dist/jquery.js',
      swiper        : settings.rootSrc + '/bower_components/swiper/dist/js/swiper.js',
      slick  	      : settings.rootSrc + '/bower_components/slick-carousel/slick/slick.js',
      dotdotdot     : settings.rootSrc + '/bower_components/jQuery.dotdotdot/dist/jquery.dotdotdot.js',
      font          : settings.rootSrc + '/font/*',
      images        : settings.rootSrc + '/img/**/*',
      json        	: settings.patternSrc + '/**/*.json',
      twig        	: settings.patternSrc + '/**/*.twig'
    },
    dst = {
      style         : settings.patternSrc + '/css/',
      js            : settings.patternSrc + '/js/',
      font          : settings.patternSrc + '/font/',
      images        : settings.patternSrc + '/images/'
    },
    dstPbl = {
      style         : settings.patternPublicSrc + '/css/',
      js            : settings.patternPublicSrc + '/js/',
      font          : settings.patternPublicSrc + '/font/',
      images        : settings.patternPublicSrc + '/images/'
    },
    watch = {
      style         : settings.rootSrc + '/sass/**/*',
      js            : settings.rootSrc + '/js/**/*'
    },
		gulp = require('gulp'),
    imagemin        = require('gulp-imagemin'),
	  sass            = require('gulp-sass'),
	  sourcemaps      = require('gulp-sourcemaps'),
	  autoprefixer    = require('gulp-autoprefixer'),
	  gutil           = require('gulp-util'),
	  concat          = require('gulp-concat'),
	  stripdebug      = require('gulp-strip-debug'),
	  newer           = require('gulp-newer'),
	  rename          = require('gulp-rename'),
	  deporder        = require('gulp-deporder'),
	  plumber         = require('gulp-plumber'),
	  jshint          = require('gulp-jshint'),
	  uglify          = require('gulp-uglify'),
	  browsersync     = require('browser-sync').create(),
	  reload          = browsersync.reload,
	  stream          = browsersync.stream;

var onError = function (err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};

// image processing
gulp.task('images', function() {
  return gulp.src(src.images)
    .pipe(plumber({errorHandler: onError}))
    .pipe(newer(dst.images))
    .pipe(imagemin([
                    imagemin.gifsicle({
                      interlaced: true,
                      optimizationLevel: 3
                    }),
                    imagemin.jpegtran({progressive: true}),
                    imagemin.optipng({optimizationLevel: 7}),
                    imagemin.svgo({
                      plugins: [
                        {removeViewBox: false},
                        {cleanupIDs: false}
                      ]
                    })
                  ]))
    .pipe(gulp.dest(dst.images));
});

// font copy
gulp.task('font', function() {
  return gulp.src(src.font)
    .pipe(plumber({errorHandler: onError}))
    .pipe(newer(dst.font))
		.pipe(gulp.dest(dst.font));
});


// CSS processing
gulp.task('css', function() {
  return gulp.src(src.style)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle     : 'expanded',
        sourceComment   : true,
        imagePath       : dst.images,
        precision       : 10,
        errLogToConsole : true
      }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 2%']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dst.style))
    .pipe(gulp.dest(dstPbl.style));
});

// js processing

gulp.task('js', function() {

	if (typeof settings.useDeporder === 'undefined' || settings.useDeporder) {
	  gulp.src([
			src.jquery,
			src.dotdotdot,
			src.swiper,
			src.slick,
			src.js
		])
	    .pipe(jshint())
	    // .pipe(jshint.reporter('default'))
	    .pipe(deporder())
	    .pipe(concat('main.js'))
	    // .pipe(stripdebug())
	    .pipe(gulp.dest(dst.js))
	    .pipe(gulp.dest(dstPbl.js));

		// dist version
		return gulp.src([
			src.js
		])
	    .pipe(jshint())
	    // .pipe(jshint.reporter('default'))
	    .pipe(deporder())
	    .pipe(concat('main.js'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest(dst.js))
	    .pipe(gulp.dest(dstPbl.js));
	} else {
	  gulp.src([
			src.jquery,
			src.dotdotdot,
			src.swiper,
			src.slick,
			src.js
		])
	    .pipe(jshint())
	    // .pipe(jshint.reporter('default'))
	    // .pipe(deporder())
	    .pipe(concat('main.js'))
	    // .pipe(stripdebug())
	    .pipe(gulp.dest(dst.js))
	    .pipe(gulp.dest(dstPbl.js));

		// dist version
		return gulp.src([
			src.js
		])
	    .pipe(jshint())
	    // .pipe(jshint.reporter('default'))
	    // .pipe(deporder())
	    .pipe(concat('main.js'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest(dst.js))
	    .pipe(gulp.dest(dstPbl.js));
	}
});

// Browsersync options
const syncOpts = {
	// proxy: { target: settings.proxyUrl },
  open: false,
  files: [
		settings.patternPublicSrc + '/css/style.css'
	],
  server: {
    baseDir: settings.patternPublicSrc + "/",
  	index: "index.html"
	}
};


// run all tasks
gulp.task('build', ['css', 'js', 'font', 'images', 'patterns:generate']);

//watch
gulp.task('watch', function() {
  // Browsersync
  browsersync.init(syncOpts);

  // image changes
  gulp.watch(src.images, ['images', reload]);

  // font changes
  gulp.watch(src.font, ['font', reload]);

  // pattern changes
  gulp.watch([src.json, src.twig], ['patterns:generate', reload]);

  // CSS changes
  gulp.watch(watch.style, ['css', stream]);

  // JavaScript main changes
  gulp.watch(watch.js, ['js', reload]);
});


gulp.task('default', ['build', 'watch']);
