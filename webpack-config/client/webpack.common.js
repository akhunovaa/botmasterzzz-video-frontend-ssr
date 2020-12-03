const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
  
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./../../src/Videos"),
    video: path.resolve(__dirname, "./../../src/components/AppWatchVideo"),
    api: path.resolve(__dirname, "./../../src/Api")
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "",
      template: path.resolve(__dirname, "./../../index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "video.html",
      title: "",
      template: path.resolve(__dirname, "./../../video.html")
    })
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "./../../dist"),
    publicPath: "/"

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}
