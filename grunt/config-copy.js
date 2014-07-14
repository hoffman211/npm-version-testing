/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    grunt.config( 'copy', {

			dist: {
				
				files: [{
					
					expand: true
					, cwd: '<%= app %>/'
					, src: ['fonts/**', '**/*.html','**/*.js', '!**/*.scss', '!bower_components/**']
					, dest: '<%= dist %>/'
				
				}]
			
			}
		
    });
    
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

};