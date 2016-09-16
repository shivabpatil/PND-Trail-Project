var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default',function (argument) {
	nodemon({
		script:'server.js',
		ext:'js',
		env:{
			port:8000
		},
		ignore:['./node_modules/**']
	})
	.on('restart',function () {
		console.log('Restarting'); 
	});
})