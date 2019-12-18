const path = require("path");
const { CheckerPlugin } = require('awesome-typescript-loader');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    context: path.join(__dirname, "src/"),
    devtool: 'source-map',
    entry: "./index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: false,
        port: 3000
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "assets/*",
            to: "./"
        }])
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
    plugins: [
        new CheckerPlugin(),
    ],
};