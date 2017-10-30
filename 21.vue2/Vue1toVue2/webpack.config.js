const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath : 'public'
	},
	module: {
	    rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				loader: "babel-loader",
				options: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
					},
					extractCSS: true
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css") 
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}