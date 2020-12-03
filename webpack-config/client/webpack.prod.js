const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")


module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new CopyWebpackPlugin(
        {
          patterns: [
            { from: './manifest.json', to: './manifest.json', force:true },
            { from: './sitemap.xml', to: './sitemap.xml', force:true },
            { from: './youtube.svg', to: './youtube.svg', force:true },
            { from: './logo192.png', to: './logo192.png', force:true },
            { from: './logo512.png', to: './logo512.png', force:true },
            { from: './default.jpeg', to: './default.jpeg', force:true },
            { from: './favicon.ico', to: './favicon.ico', force:true }
          ]
        }
    )
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
      ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
})
