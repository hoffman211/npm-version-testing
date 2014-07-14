/*
 * SASS Configuration
 *
 * See all options: 
 */
 module.exports = function( grunt ) {

    grunt.config( 'sass', {
        
        compile: {
            
            options: {
                
                style: 'expanded', // expanded or nested or compact or compressed
                loadPath: '<%= app %>/bower_components/foundation/scss',
                compass: true,
                quiet: true

            },

            files: {
               
                '<%= app %>/css/app.css': '<%= app %>/scss/app.scss',
                '<%= dist %>/css/app.css': '<%= app %>/scss/app.scss'

            }
        }

    });
    
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
};