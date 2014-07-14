/*
 * JSHint Configuration
 *
 * See all options: http://www.jshint.com/docs/options/
 */
module.exports = function( grunt ) {

    grunt.config( 'jshint', {
        
        options: {
          
            jshintrc: '.jshintrc'
        },

        all: [
           
            'Gruntfile.js',
            '<%= app %>/js/**/*.js'

        ]
        
    });
    
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
};