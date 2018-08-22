const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: process.cwd() + '/build',
        filename: '[name].js',
        publicPath: '/build/',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        publicPath: '/build/',
        contentBase: './',
        historyApiFallback: {
            index: 'index.html',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "./"),
        ],
        alias: {
            'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/single-spa.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
};
