let gulp = require("gulp");
let sass = require("gulp-sass");
let concat = require("gulp-concat");
let rename = require("gulp-rename");

let paths = {
     "styles": {
         "src": [
             "src/scss/header.scss",
             "src/scss/body.scss",
             "src/scss/footer.scss"
         ],
         "dest": "assets/styles"
     }
 }

gulp.task("compile-sass", function() {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(rename({
        basename: "main",
        suffix: ".min"
    }))
    .pipe(gulp.dest(paths.styles.dest));
});