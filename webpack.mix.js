const mix = require('laravel-mix');
const local = require('./local.json');
/* const local = require('./local'); */
require('laravel-mix-versionhash');
require('laravel-mix-tailwind'); 

mix.setPublicPath('./build');

mix.webpackConfig({
    externals: {
        "jquery": "jQuery",
    }
});



if (local.proxy) {
    mix.browserSync({
        proxy: local.proxy,
        injectChanges: true,
        open: false,
        files: [
            'build/**/*.{css,js}',
            'templates/**/*.php',
            './*.php'
        ]
    });
}

 
mix.tailwind();

mix.js('assets/js/app.js', 'js');
mix.sass('assets/scss/app.scss', 'css').options({ processCssUrls: false});  
mix.copy('assets/img', 'build/img'); 
mix.copy('assets/svg', 'build/svg');
mix.copy('assets/font', 'build/font'); 

 
// if (mix.inProduction()) {
//    mix.versionHash();
//      mix.version(['build/js/random.js']); 
// }

