const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const glob = require('glob');
const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'public'),
};

const commonConfig = merge([
	{
	entry: {
		app: PATHS.app,
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Seaview Signup',
			template: './src/index.html'
		}),
	],
	},
	parts.lintJavaScript({include: PATHS.app}),
]);

const productionConfig = merge([
	parts.extractCSS({use: 'css-loader'}),
	parts.purifyCSS({
		paths: glob.sync(`${PATHS.app}/**/*.js`, {nodir: true}),
	}),
]);

const developmentConfig = merge([
	parts.devServer({
		host: process.env.HOST,
		port: process.env.PORT,
	}),
	parts.loadCSS(),
]);

module.exports = (env) => {
	if(env === 'production') {
		return merge(commonConfig, productionConfig);
	}
	return merge(commonConfig, developmentConfig);
};
