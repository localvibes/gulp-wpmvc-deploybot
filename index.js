'use strict';

/**
 * Wordpress MVC additional commands.
 * Adds deploybot build command.
 *
 * @author Local Vibes <https://localvibes.co/>
 * @license MIT
 * @version 1.0.0
 */
module.exports = function(gulp, config)
{
    // Dependencies.
    if (!gulp) gulp = require('gulp');
    var del = require('del');
    // Prepare options
    if (!config) config = {};
    if (!config.deploybot) config.deploybot = 'deploybot';
    if (!config.predeploybot) config.predeploybot = ['build-prezip', 'jsmin', 'cssmin'];
    if (!config.deploybottasks) config.deploybottasks = ['deploybot-main', 'deploybot-clean'];

    // Additional tasks
    gulp.task('deploybot-main', config.predeploybot, function () {
        return gulp.src('./builds/staging/'+config.name+'/**/*')
            .pipe(gulp.dest('./builds/'+config.deploybot));
    });
    // Cleans SVN
    gulp.task('deploybot-clean', ['deploybot-main'], function() {
        return del([
            './builds/staging/**/*',
            './builds/staging',
        ]);
    });
    // --------------------
    // Build task
    // --------------------
    gulp.task('deploybot', config.deploybottasks);
}