/**
*Gulp的主文件 
* @Author: Administrator
* @Date:   2017-06-05 09:58:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-05 16:15:51
*/

'use strict';
//此处的代码都是由node执行的
//载入gulp的模块
var gulp=require("gulp");
//注册一个任务
gulp.task("copy",function(){
	//当gulp执行say任务时，会自动执行该函数
	//获取一个文件
	gulp.src("src/index.html")
		//将一个文件拷贝到dist文件夹中
		//pipe()表示一种方式，表示在此处需要进行的操作
		//gulp.dest("...")表示将文件写入某个文件夹中
		.pipe(gulp.dest("dist/"));
});

gulp.task("dist",function(){
	//当src中的index.html文件发生变化时，会触发copy方法,也就是实现了当修改src中的index.html时，dist中的index.html也会实现同步变化
	gulp.watch("src/index.html",["copy"]);
})