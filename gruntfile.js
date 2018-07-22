module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },
        watch: {
            files: ['less/*.less'],
            tasks: ['less']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/*.css','./index.html']
                },
                options: {
                    server: {
                        baseDir: "./"
                    },
                    watchTask: true
                }
            }
        }
    });

grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['browserSync', 'watch']);

};