/*
 * Imagemin Configuration
 *
 * See all options: 
 */
module.exports = function( grunt ) {

    grunt.config( 'imagemin', {

        target: {
            
            files: [{
                
                expand: true,
                cwd: '<%= app %>/images/',
                src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                dest: '<%= dist %>/images/'

            }]

        }
        
    });

    grunt.loadNpmTasks( 'grunt-contrib-imagemin' );

};