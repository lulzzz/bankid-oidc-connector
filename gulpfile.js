const gulp = require( 'gulp' );

const path = require( 'upath' );
const requireDir = require( 'require-dir-all' );

requireDir( path.resolve( __dirname, 'src/tools/gulp' ), {
    recurse: true,
    includeFiles: /\.gulp\.js$/
} );

gulp.task( 'connector', ['connector:scss:watch', 'connector:js:watch'] );

gulp.task( 'connector:test', ['connector:test:unit'] );

gulp.task( 'connector:dev', ['connector:server'] );
