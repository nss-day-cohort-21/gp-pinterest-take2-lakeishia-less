module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$","firebase"],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true}
      },
      files: ['../app/**/*.js']
    },
    connect: {
      server: {
        options: {
          base: '../',
          hostname: 'localhost',
          port: 3000,
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'watch']);
};