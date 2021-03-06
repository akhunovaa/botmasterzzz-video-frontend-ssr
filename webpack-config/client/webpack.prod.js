const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")
const webpack = require("webpack");


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
            { from: './sitemap_two.xml', to: './sitemap_two.xml', force:true },
            { from: './sitemap_third.xml', to: './sitemap_third.xml', force:true },
            { from: './sitemap_fourth.xml', to: './sitemap_fourth.xml', force:true },
            { from: './sitemap_third_one.xml', to: './sitemap_third_one.xml', force:true },
            { from: './sitemap_third_two.xml', to: './sitemap_third_two.xml', force:true },
            { from: './sitemap_third_three.xml', to: './sitemap_third_three.xml', force:true },
            { from: './site-map.xml', to: './site-map.xml', force:true },
            { from: './youtube.svg', to: './youtube.svg', force:true },
            { from: './logo192.png', to: './logo192.png', force:true },
            { from: './logo512.png', to: './logo512.png', force:true },
            { from: './default.jpeg', to: './default.jpeg', force:true },
            { from: './arch.jpeg', to: './arch.jpeg', force:true },
            { from: './gRPC.jpeg', to: './gRPC.jpeg', force:true },
            { from: './nn_bot_logo_1024x1024.png', to: './nn_bot_logo_1024x1024.png', force:true },
            { from: './favicon.ico', to: './favicon.ico', force:true },
            { from: './robots.txt', to: './robots.txt', force:true },
            { from: './android-chrome-192x192.png', to: './android-chrome-192x192.png', force:true },
            { from: './android-chrome-512x512.png', to: './android-chrome-512x512.png', force:true },
            { from: './apple-touch-icon.png', to: './apple-touch-icon.png', force:true },
            { from: './browserconfig.xml', to: './browserconfig.xml', force:true },
            { from: './favicon-16x16.png', to: './favicon-16x16.png', force:true },
            { from: './favicon-32x32.png', to: './favicon-32x32.png', force:true },
            { from: './mstile-150x150.png', to: './mstile-150x150.png', force:true },
            { from: './safari-pinned-tab.svg', to: './safari-pinned-tab.svg', force:true },
            { from: './site.webmanifest', to: './site.webmanifest', force:true }
          ]
        }
    ),
    new webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    })
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
