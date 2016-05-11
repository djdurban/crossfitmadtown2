module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['./public/prod']
                },
                files: {
                    './public/prod/style.css': './public/stylesheets/style.less'
                }
            },
            production: {
                options: {
                    paths: ['./public/prod'],
                    plugins: [

                    ],
                },
                files: {
                    './public/css/style.css': './public/stylesheets/style.less'
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: false,
                    src: ['./public/javascripts/vendor/*.js','./public/javascripts//*.js'],
                    dest: './public/prod/scripts.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less','uglify']);

};