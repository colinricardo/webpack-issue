const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
  entry: {
    "bundle.js": glob
      .sync("build/static/?(js|css)/*.?(js|css)")
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    path: __dirname,
    filename: "build/static/js/bundle.min.js",
    libraryTarget: "umd",
    library: "App",
    umdNamedDefine: true,
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
};
