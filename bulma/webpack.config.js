const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
                'style-loader',
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						// options...
					}
				}
			]
		}, {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: false,
						},
					},
				],
			},]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
	new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
};