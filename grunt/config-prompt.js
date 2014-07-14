/*
 * Prompt Configuration
 *
 * See all options:
 */
module.exports = function( grunt ) {

    var semver = require('semver')
        , currentVersion = require('../package.json').version;

	grunt.config('prompt', {

		target: {
			
			options: {
			
				questions: [
					{
						config: 'build.confirm',
						type: 'confirm',
						message: 'Are you sure you want to update the version number?'
					}
					, {
						config: 'build.increment',
						type: 'list',
						message: 'Bump version from ' + '<%= pkg.version %>'.cyan + ' to:',
						choices: [{
								value: 'patch',
								name: 'Patch:  '.yellow + semver.inc(currentVersion, 'patch').yellow +
									'   Backwards-compatible bug fixes.'
						}
						, {
								value: 'minor',
								name: 'Minor:  '.yellow + semver.inc(currentVersion, 'minor').yellow +
									'   Add functionality in a backwards-compatible manner.'
						}
						, {
								value: 'major',
								name: 'Major:  '.yellow + semver.inc(currentVersion, 'major').yellow +
									'   Incompatible API changes.'
						}
					]

				}

			],
			
			then: function(results) {
					
					if (!grunt.config('build.confirm')){
						
						throw 'You must confirm the build!';
					
					} else {
						
						grunt.task.run([
							
							'bump-only:' + grunt.config('build.increment')
							, 'changelog'
							, 'bump-commit'
						
						]);
					
					}
			}

		}}

	});

	grunt.loadNpmTasks('grunt-prompt');

};