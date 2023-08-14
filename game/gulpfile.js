const gulp = require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');
const browsersync = require('browser-sync');
var exec = require('child_process').exec;
const server = browsersync.create();

gulp.task('clean', () => {
    return gulp.src('node_modules').pipe(clean());
});

function reloadServer(cd) {
    server.reload();
    cd();
}

function runServer() {
    server.init({
        server: {
            baseDir: '.'
        }
    });
}

function firebase(cb) {
    exec('firebase deploy', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        // cb(err);
    });
}

function watchingFiles(cd) {
    gulp.watch('*.html', reloadServer);
    gulp.watch('css/', { events: 'all' }, reloadServer);
    gulp.watch('js/', { events: 'all' }, reloadServer);
}

exports.bundle = () => {
    console.log('Running bundle function');
}

exports.play = () => {
    console.log('Running Game...');
    runServer();
    watchingFiles();
    // series(runServer, watchingFiles);
};

//To deploy game to firebase run: gulp deploy
exports.deploy = () => {
    firebase();
};
