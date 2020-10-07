const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './resource/js/app.js',
    output:
    {
        path: __dirname + '/public' ,
        filename: 'app.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader:'css-loader'}
                ]
            }
        ]
    },
    devServer: {
        //contentBase: path.join( __dirname, '/public'),
        //compress: true,
        port: 8080
      },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: './resource/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ]
}