module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['./public/stylesheets']
                },
                files: {
                    './public/css/style.css': './public/stylesheets/style.less'
                }
            },
            production: {
                options: {
                    paths: ['./public/css'],
                    plugins: [

                    ],
                },
                files: {
                    './public/css/style.css': './public/stylesheets/style.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);

};