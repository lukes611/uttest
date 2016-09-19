module.exports = function(grunt){
    
    grunt.initConfig({
        jshint:{
            src : 'client/js/index.js'
        }
    });
    
    //load plugins:
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
};