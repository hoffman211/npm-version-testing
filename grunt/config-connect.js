/*
 * Connect Configuration
 *
 * See all options: 
 */
 module.exports = function( grunt ) {

    grunt.config( 'connect', {
        
        app: {
           
            options: {
                
                port: 9000,
                base: '<%= app %>/',
                open: true,
                livereload: false,
                hostname: '127.0.0.1'

            }

        },

        dist: {
            
            options: {

                port: 9001,
                base: '<%= dist %>/',
                open: true,
                keepalive: true,
                livereload: false,
                hostname: '127.0.0.1'
                
            }

        }

    });
    
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
};