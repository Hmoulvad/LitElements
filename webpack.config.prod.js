const path  = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  context: path.join(__dirname, "src/"),
  entry: "./index.ts",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        terserOptions: {
            output: {
                comments: false,
            }
        }
    })],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "assets/*", to: "./"},
      { from: "../public/", to: "./"}]),
    new CheckerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
