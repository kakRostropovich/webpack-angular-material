'use strict';  

var webpack = require('webpack'),  
    // ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

var APP = path.join(__dirname , '/app');
var TARGET = path.join(__dirname , '/target');

module.exports = {  
    context: APP,
    entry: {  
    	app: ['webpack/hot/dev-server', './core/bootstrap.js'],
        vendor: ['./core/vendor.js']
  	},
  	output: {
        path: TARGET,
        filename: 'bundle.js'
    },
	plugins: [  
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    	new webpack.HotModuleReplacementPlugin(),
        // new webpack.ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  	],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            // for angular ES6 files
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    }
    
}