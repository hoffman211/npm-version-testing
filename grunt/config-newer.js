/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    grunt.config( 'newer', {

			options: {

				//empty for now

			}

    });
    
    grunt.loadNpmTasks( 'grunt-newer' );

};