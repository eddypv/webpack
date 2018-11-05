const path = require('path')
const ExtractTextPlugin= require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        home:path.resolve(__dirname, 'index.js'),
        contact:path.resolve(__dirname, 'contact.js')

    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:"css-loader",
                            options:{
                                modules:true,
                                importLoaders:1
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', "sass-loader"]
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    use:[
                        'css-loader',
                        {
                            loader:'less-loader',
                            options:{
                                noIeCompat:true
                            }
                        }

                    ]
                })
            },
            {
                test:/\.styl$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        {
                            loader:'stylus-loader',
                            options:{
                                use:[
                                    require('nib'),
                                    require('rupture')
                                ],
                                import:[
                                    '~nib/lib/nib/index.styl',
                                    '~rupture/rupture/index.styl',
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react']
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
        new ExtractTextPlugin("css/[name].css"),
        
    ],
    optimization: {
        splitChunks: {
            name: "common",
            chunks: "initial"
        }
    }
}