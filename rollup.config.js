import uglify from "rollup-plugin-uglify"

export default {
  entry: "src/index.js",
  dest: "dist/picostyle-react.js",
  format: "umd",
  moduleName: "picostyleReact",
  plugins: [
    uglify()
  ],
  sourceMap: true,
}
