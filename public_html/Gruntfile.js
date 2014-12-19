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
        },
        imagemin: {
            dynamic: {
                files: [{
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.{svg,png,gif}'],
                        dest: 'img/build'
                }]
            }
        },
        cssmin: {
            my_target: {
                files: [{
                        expand: true,
                        cwd: 'css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'css/',
                        ext: '.min.css'
                }]
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify','imagemin','cssmin']);
    
};


