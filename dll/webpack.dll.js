const path = require('path')
const ExtractTextPlugin= require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        modules:[
            'react',
            'react-dom',
        ],
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].js',
        library:"[name]"
    },
    
    plugins:[
        //new ExtractTextPlugin("css/[name].css"),
        new webpack.DllPlugin({
            name:"[name]",
            path:path.join(__dirname, '[name]-manifest.json')
        })
    ],
    
}