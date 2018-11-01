const path = require('path')
const ExtractTextPlugin= require('extract-text-webpack-plugin')
module.exports = {
    entry:path.resolve(__dirname, 'index.js'),
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            },
            {
                test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000
                    }
                }
            }
            
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css")
    ]
}