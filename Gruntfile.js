module.exports = function(grunt) {
	grunt.initConfig({
		// Read Package Information
		pkg: grunt.file.readJSON('package.json'),
		// Generate File Banner
		banner: '/*! \n' + 
				'* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'*/\n',		
		// Lint Javascript
		jshint: {
			all: {
				src: ['assets/js/*.js', '!assets/js/main.min.js' ],
			},
			gruntfile: {
				src: ['Gruntfile.js'],
			}
		},
		uglify: {
			options: {
				mangle: false,
			},
			files: {
				src: 'browser-update.js',
				dest: './',  // source files mask
				expand: true,    // allow dynamic building
				flatten: true,   // remove all unnecessary nesting
				ext: '.min.js'   // replace .js to .min.js
			},
			main: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'assets/js/main.min.js': ['assets/js/main.js']
				}
			},
		},
		// Watch for Changes
		watch: {
			// Live lint new scripts
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['jshint', 'concat', 'uglify'],
				options: {
					spawn: false,
					// Start a live reload server
					livereload: true,
				},
			},
			// Live lint Grunt file
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile', 'bowercopy', 'jshint:all', 'sprite', 'less', 'cssmin', 'concat', 'uglify'],
				
			},
		},
	});

	// Load Grunt Modules //
	// Watch
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Lint JS
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Uglify JS
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Runt Grunt Tasks //
    grunt.registerTask('default', ['jshint', 'uglify', 'watch']); 
};