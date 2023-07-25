const gulp = require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');
const browsersync = require('browser-sync');
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