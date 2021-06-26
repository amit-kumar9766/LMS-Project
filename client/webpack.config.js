const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const port = process.env.PORT || 3000;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
    ],
  },
  devServer: {
    host: "localhost",
    //port: port,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
