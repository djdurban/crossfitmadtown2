module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['./public/prod'],
                    compress:true
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
                    compress:true
                },
                files: {
                    './public/prod/style.css': './public/stylesheets/style.less',
                    './public/prod/popout.css': './public/stylesheets/popout.less'
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: false,
                    src: [
                        './public/javascripts/vendor/jquery.js',
                        './public/javascripts/vendor/lodash.js',
                        './public/javascripts/vendor/bootstrap.js',
                        './public/javascripts/vendor/modernizr.custom.js',
                        './public/javascripts/vendor/moment.js',
                        './public/javascripts/vendor/classie.js',
                        './public/javascripts/vendor/fullcalendar.js',
                        './public/javascripts/*.js'
                    ],
                    dest: './public/prod/scripts.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less','uglify']);

};