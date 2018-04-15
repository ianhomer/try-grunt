module.exports = function(grunt) {

  // Basic default task.
  grunt.registerTask('default', 'Logging', function() {
    grunt.log.write('Trying grunt\n').ok();
  });

};