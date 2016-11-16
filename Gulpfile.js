var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('concat_uglify', function(cb) {
    pump([
            gulp.src(['js/phaser.js','js/create.js','js/preload.js','js/update.js', 'js/globals.js' ]).pipe(concat('coco_vs_paint.js')).pipe(gulp.dest('./')),
            uglify(),
            gulp.dest('./')
        ],
        cb
    );
});

gulp.task('default', ['concat_uglify']);