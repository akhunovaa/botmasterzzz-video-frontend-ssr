const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const config = {
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  entry: {
    "Videos": path.resolve(__dirname, "./../../src/Videos"),
    "AppWatchVideo": path.resolve(__dirname, "./../../src/components/AppWatchVideo"),
    "AppSearchResult": path.resolve(__dirname, "./../../src/components/AppSearchResult"),
    "AppTrends": path.resolve(__dirname, "./../../src/components/AppTrends"),
    "Api": path.resolve(__dirname, "./../../src/Api"),
    "template": path.resolve(__dirname, "./../../server/template")
  },
  output: {
    path: path.resolve(__dirname, "./../../dist-ssr"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(scss|css)$/, loader: "ignore-loader" }
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]

}

module.exports = config
