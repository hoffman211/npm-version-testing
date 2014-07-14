module.exports = function( grunt ) {

    'use strict';

    /* Configure */
    grunt.initConfig({
        
        pkg: grunt.file.readJSON( 'package.json' ),
        app: 'app',
        dist: 'dist',
        meta: { 
          banner: 
            
            '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
            ' */\n'
        }

    });
    
    /* Load tasks */
    grunt.loadTasks( 'grunt' );
    
    /* Task aliases */
    grunt.registerTask( 'dev', [

        'jshint',
        'connect:app',
        'watch:sass'

    ]);

    grunt.registerTask( 'build', [

        'prompt',
        'jshint',
        'clean', 
        'sass',
        'copy',
        'uglify',
        'newer:imagemin',
        'changelog',
        'complete'

    ]);

    grunt.registerTask( 'default', [

        'connect:dist'

    ]);

};
