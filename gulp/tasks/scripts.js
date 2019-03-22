var gulp = require("gulp"),
  webpack = require("webpack");

gulp.task("scripts", function(callback) {
  webpack(require("../../webpack.config"), function(err, stats) {
    if (err) {
      console.error(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});
