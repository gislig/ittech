    var elixir = require('laravel-elixir');
    var gulp = require('gulp');
    /*
     |--------------------------------------------------------------------------
     | Elixir Asset Management
     |--------------------------------------------------------------------------
     |
     | Elixir provides a clean, fluent API for defining some basic Gulp tasks
     | for your Laravel application. By default, we are compiling the Sass
     | file for our application, as well as publishing vendor resources.
     |
     */
    gulp.task("prepfiles", function() {

        // Copy jquery files into the public/assets/js folder
        gulp.src("vendor/bower_downloads/jquery/dist/jquery.js").pipe(gulp.dest("public/assets/js/"));
        gulp.src("vendor/bower_downloads/html5shiv/dist/html5shiv.js").pipe(gulp.dest("public/assets/js/"));
        gulp.src("vendor/bower_downloads/respond/dest/respond.min.js").pipe(gulp.dest("public/assets/js/"));

        // Copy bootstrap files into the public/css/folder
        gulp.src("vendor/bower_downloads/bootstrap/dist/css/bootstrap.css").pipe(gulp.dest("public/assets/css/"));

    });

    elixir(function(mix) {
        mix.sass('app.scss');
    });

