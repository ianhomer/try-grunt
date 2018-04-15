module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    githash: {
      main: {
        options: {},
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> @ <%= githash.main.short %> ' +
          '(<%=githash.main.branch %>) */\n'
      },
      build: {
        src: 'src/my.js',
        dest: 'build/my.min.js'
      }
    }
  });

  // Load NPM plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-githash');

  // Inline task
  grunt.registerTask('log', 'Logging task', function() {
    grunt.log.write('Trying grunt\n').ok();
  });

  // Basic default task.
  grunt.registerTask('default', ['log', 'jshint', 'githash', 'uglify']);

};