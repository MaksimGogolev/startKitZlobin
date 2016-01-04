// #############################################################################
// ##                              Copy fonts.                                ##
// #############################################################################
module.exports = function (gulp, plugins, getPath, join) {
  return () => {
    let imagesDirectory = getPath({type: 'folder', name: 'fonts'});
    let buildPath = getPath({type: 'folder', name: 'build'});
    let files = join(imagesDirectory, '{,*/}*.{eot,svg,ttf,woff,woff2}');

    gulp.src(files)
      .pipe(plugins.flatten())
      .pipe(gulp.dest(join(buildPath, 'fonts')));
  };
};
