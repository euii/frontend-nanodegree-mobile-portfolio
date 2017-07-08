module.exports = function (grunt) {
  grunt.initConfig({
//   concat: {//css文件合并
//     css: {
//       src: ['css/dist/style.css','css/dist/print.css'],//当前grunt项目中路径下的src/css目录下的所有css文件
//       dest: 'css/dist/style.css'  //生成到grunt项目路径下的dist文件夹下为all.css
//     }
//   },
  cssmin: { //css文件压缩
     css: {
        src: 'css/style.css',
        dest: 'css/dist/style.min.css'  //压缩
      },
      css1:{
        src: 'css/print.css',
        dest: 'css/dist/print.min.css'  //压缩
      }
   }
});
grunt.loadNpmTasks('grunt-css');
grunt.loadNpmTasks('grunt-contrib-concat');
  
//   grunt.registerTask('default', ['concat','cssmin']);
  grunt.registerTask('default', ['cssmin']);
}