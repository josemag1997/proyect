var gulp = require('gulp'),
	pug = require('gulp-pug'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('pug', ()=>
	gulp.src('./dev/views/*.pug')//origen 
	.pipe(pug({
		pretty: true //para agregar saltos de linea en el html
	}))
	.pipe(gulp.dest('./'))//destino
	);
gulp.task('watch', ()=>{
	gulp.watch('./dev/views/*.pug', ['pug', browserSync.reload] ); //ejecuta la funcion
})

gulp.task('server', function(){
  browserSync.init({
    server:{
      baseDir:'./dist'
    }
  })
})

gulp.task('default', ['pug'] );
gulp.task('serve', ['watch', 'server']);