const
    gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    browsersync = require('browser-sync').create(),
    reload          = browsersync.reload,
    stream          = browsersync.stream,
    settings = require('../../gulp.config.json'),
    src = {
      style         : settings.patternPublicSrc + '/css/*.css',
    //   js            : settings.rootSrc + '/js/**/*.js',
    //   jquery        : settings.rootSrc + '/bower_components/jquery/dist/jquery.js',
    //   swiper        : settings.rootSrc + '/bower_components/swiper/dist/js/swiper.js',
    //   slick  	    : settings.rootSrc + '/bower_components/slick-carousel/slick/slick.js',
    //   dotdotdot     : settings.rootSrc + '/bower_components/jQuery.dotdotdot/dist/jquery.dotdotdot.js',
    //   font          : settings.rootSrc + '/font/*',
    //   images        : settings.rootSrc + '/img/**/*',
    //   json        	: settings.patternSrc + '/**/*.json',
    //   twig        	: settings.patternSrc + '/**/*.twig'
    },
    watch = {
      style         : settings.rootSrc + '/sass/**/*',
      js            : settings.rootSrc + '/js/**/*'
    };


// Browsersync options
const syncOpts = {
	// proxy: { target: settings.proxyUrl },
  open: false,
  files: [
		settings.copyDest + '/assets/css/style.css'
    ],
  proxy: {
    target: settings.proxyUrl
  },
  port: 3002
};

const browserSyncFn = function()
{
    
  // Browsersync
  browsersync.init(syncOpts);

  // image changes
  gulp.watch(src.style, ['exportPatterns']);
};

gulp.task('dev', browserSyncFn);

module.exports = [browserSyncFn];
