/*
 * Changlog Configuration
 *
 * See all options:
 */
module.exports = function( grunt ) {

	grunt.config( 'changelog', {

		options: {

			dest: 'CHANGELOG.md',
			template: '../changelog/template.tpl'

		}	

	});
	
	grunt.loadNpmTasks('grunt-conventional-changelog');
	
};