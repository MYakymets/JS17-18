module.exports = function(grunt) {

  grunt.initConfig({
    concat_css: {
      options: {
      },
      all: {
        src: ["css/src/*.css"],
        dest: "css/dest/style.min.css"
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dest/script.min.js'
      }
    },
    uglify: {
        dist: {
          src: ['js/dest/script.min.js'],
          dest: 'js/dest/script.min.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');


  grunt.registerTask('default', ['concat', 'uglify', 'concat_css']);

};
