/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function( grunt ) {

    grunt.config( 'clean', {
        
        options: {
            
            force: true

        },

        dist: {
            
            files: [{
                
                src: '<%= dist %>/'
            
            }]

        }

    });
    
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};