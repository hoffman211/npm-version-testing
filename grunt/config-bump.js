/*
 * Bump Configuration
 *
 * See all options: 
 */
module.exports = function( grunt ) {

    grunt.config( 'bump', {
        
        options: {
            
            files: ['package.json'],
			      updateConfigs: [],
			      commit: true,
			      commitMessage: 'Release v%VERSION%',
			      commitFiles: ['package.json'],
			      createTag: true,
			      tagName: 'v%VERSION%',
			      tagMessage: 'Version %VERSION%',
			      push: false,
			      pushTo: 'upstream',
			      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
        
        }

    });
    
    grunt.loadNpmTasks( 'grunt-bump' );

};