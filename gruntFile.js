module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            src : 'client/js/index.js'
        },
        sass:{
            files : {
                'scss/index.sass' : 'client/css/index.css'
            }
        },
        mocha : {
            all : {
                src : ['client/index.html']
            },
            options : {
                run : true         
            }
        }
    });
    
    //load plugins:
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-mocha');
    
    grunt.registerTask('default', ['jshint', 'sass', 'mocha']);
};