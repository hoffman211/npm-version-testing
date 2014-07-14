/*
 * Watch Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function( grunt ) {

    grunt.config( 'watch', {

        grunt: {

            files: ['Gruntfile.js'],
            tasks: ['sass']

        },

        sass: {

            files: '<%= app %>/scss/**/*.scss',
            tasks: ['sass']

        },

        livereload: {

            files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
            options: {

                livereload: false

            }

        }

    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
};