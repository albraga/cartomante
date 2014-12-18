module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/jquery-1.11.1.min.js',
                    'js/libs/i18next-1.7.4.min.js',
                    'js/libs/bootstrap.min.js',
                    'js/cartomancer.i18n.js',
                    'js/cartomancer.data.js',
                    'js/cartomancer.js'
                ],
                dest: 'js/build/production.js'
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'uglify']);
};


