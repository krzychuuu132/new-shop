const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack");
const { env, noop } = require("gulp-util");
const plumber = require("gulp-plumber");
const argv = require("yargs").argv;
const dartCompiler = require("dart-sass");
sass.compiler = dartCompiler;

// CONSTANTS
const PROXY = argv.proxy || "http://localhost/sklep/";
const TEMPLATE_PATH = "";
const JS_PATH = TEMPLATE_PATH + "js/";
const SCSS_PATH = TEMPLATE_PATH + "scss/";
const BULID_PATH = TEMPLATE_PATH + "build";
const PRODUCTION = env.production;
// Browser Sync
gulp.task("browser-sync", () => {
  browserSync.init({
    proxy: PROXY,
    browser: "chrome",
  });
  gulp.watch([TEMPLATE_PATH + "*.html"], gulp.series("page-reload"));
  gulp.watch([JS_PATH + "**/*.js"], gulp.series("webpack", "page-reload"));

  gulp.watch([SCSS_PATH + "**/*.scss"], gulp.series("sass"));
});
gulp.task("page-reload", function (done) {
  browserSync.reload();
  done();
});
// CSS
gulp.task("sass", function () {
  return gulp
    .src([SCSS_PATH + "main.scss"])
    .pipe(plumber())
    .pipe(PRODUCTION ? noop() : sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(PRODUCTION ? noop() : sourcemaps.write())
    .pipe(gulp.dest(BULID_PATH))
    .pipe(browserSync.stream());
});

// CSS

// Webpack + babel
gulp.task("webpack", function (done) {
  webpackFn("./js/script.js", __dirname + "/build", "app.js");
  done();
});
var webpackFn = (entry, output, filename) =>
  webpack(
    {
      entry,
      output: {
        path: output,
        path: output,
        filename,
      },
      module: {
        loaders: [
          {
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: [
                [
                  "env",
                  {
                    targets: {
                      browsers: [
                        "Chrome >= 52",
                        "FireFox >= 44",
                        "Safari >= 7",
                        "Explorer 11",
                        "last 4 Edge versions",
                      ],
                    },
                    useBuiltIns: true,
                  },
                ],
              ],
              plugins: [
                [
                  "transform-regenerator",
                  {
                    asyncGenerators: false,
                    generators: false,
                    async: true,
                  },
                ],
                ["transform-class-properties", { spec: true }],
              ],
            },
          },
        ],
      },
      devtool: "source-map",
    },
    function (error, a, b) {
      if (error) console.log(error);
    }
  );
gulp.task("default", gulp.series("webpack", "sass", "browser-sync"));
gulp.task("build", gulp.series("webpack", "sass"));
