const
    gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		dirSync = require( 'gulp-directory-sync' ),
    settings = require('../../gulp.config.json');

		const exportPatternsFn = function()
		{
			// define options
			const options = {
				printSummary: true,
				ignore: ( dir, file ) => (file.search('.json') > 0) ? true : false
			}

			// // move layouts to wp theme folder
		  gulp.src( '' )
		    .pipe(dirSync( settings.patternSrc + '/_layouts', settings.copyDest + '/_layouts', options ))

			// move patterns and components to wp theme folder
		  gulp.src( '' )
		    .pipe(dirSync( settings.patternSrc + '/_patterns', settings.copyDest + '/_patterns', options ))

			// move assets to wp theme folder
		  gulp.src( '' )
		    .pipe(dirSync( settings.patternSrc + '/css', settings.copyDest + '/assets/css', options ))
		    .pipe(dirSync( settings.patternSrc + '/js', settings.copyDest + '/assets/js', options ))
		    .pipe(dirSync( settings.patternSrc + '/font', settings.copyDest + '/assets/font', options ))
		    .pipe(dirSync( settings.patternSrc + '/images', settings.copyDest + '/assets/images', options ))
			  .pipe(dirSync( settings.rootSrc + '/bower_components', settings.copyDest + '/assets/vendor', options ))
		};

		gulp.task('exportPatterns', exportPatternsFn);

		const importPatternsFn = function()
		{
			// define options
			const options = {
				printSummary: true,
				ignore: ( dir, file ) => (file.search('.json') > 0) ? true : false
			}

			// // move layouts to wp theme folder
		  gulp.src( '' )
		    .pipe(dirSync( settings.copyDest + '/_layouts', settings.patternSrc + '/_layouts', options ))

			// move patterns and components to wp theme folder
		  gulp.src( '' )
		    .pipe(dirSync( settings.copyDest + '/_patterns', settings.patternSrc + '/_patterns', options ))
		};

		gulp.task('importPatterns', importPatternsFn);

		module.exports = [importPatternsFn, exportPatternsFn];
