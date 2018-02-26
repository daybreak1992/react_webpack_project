const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '/public',
        historyApiFallback: true,
        inline: true,
        port: 8080,
        stats: {
            colors: true
        },
        progress: true,
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        loaders: [
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpq)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config