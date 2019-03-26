const
    gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		exec = require('child_process').exec,
    settings = require('../../gulp.config.json');

		const patternsGenerateFn = (cb) => {
			exec('php styleguide/core/console --generate', function (err, stdout, stderr) {
		    console.log(stdout);
		    console.log(stderr);
		    cb(err);
		  })
		};

		gulp.task('patterns:generate', patternsGenerateFn);

		module.exports = [patternsGenerateFn];
