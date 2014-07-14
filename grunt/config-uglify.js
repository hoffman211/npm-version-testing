/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {

    grunt.config( 'uglify', {

        options: {

            report: 'gzip',
            preserveComments: 'some',
            mangle: false,
            banner: '<%= meta.banner %>'

        },
       
        dist: {

            files: {
                
                'dest.js': [
                    
                    'file1.js', 
                    'file2.js'
                
                ]
            
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};