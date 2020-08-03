var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: ["html-loader"]
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "assets"
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'discover.html',
            template: './src/discover.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'tvseries.html',
            template: './src/tvseries.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: './src/search.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'detail.html',
            template: './src/detail.html'
        })
    ]
};