module.exports = function(grunt){
    
    grunt.initConfig({
        jshint:{
            src : 'client/js/index.js'
        },
        sass:{
            files : {
                'scss/index.sass' : 'client/css/index.css'
            }
        }
    });
    
    //load plugins:
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default', ['jshint', 'sass']);
};