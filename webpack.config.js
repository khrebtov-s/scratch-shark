const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

const { NODE_ENV } = process.env;

let plugins = [
	// new CompressionPlugin({}),
	new SWPrecacheWebpackPlugin({
		dontCacheBustUrlsMatching: /\.\w{8}\./,
		filename: 'service-worker.js',
		logger(message) {
			if (message.indexOf('Total precache size is') === 0) {
				return;
			}
			console.log(message);
		},
		minify: true,
		navigateFallback: '/index.html',
		staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
	}),

	new ManifestPlugin({
		fileName: 'asset-manifest.json',
	}),
	new HtmlWebpackPlugin({
		title: 'ScratchShark',
		template: 'src/index.html',
		inject: 'body',
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
		__DEVELOPMENT__: NODE_ENV === 'development',
	}),
	new CopyWebpackPlugin([{ from: './public/favicon.ico' }]),
	new CopyWebpackPlugin([{ from: './public/.htaccess' }]),
	new CopyWebpackPlugin([{ from: './src/pwa' }]),
];

if (NODE_ENV === 'production') {
	plugins = plugins.concat([
		// new UglifyJsPlugin({
		//   uglifyOptions: {
		//     warnings: false,
		//     ie8: false,
		//     output: {
		//       comments: false,
		//     },
		//   },
		// }),
		new webpack.optimize.AggressiveMergingPlugin(),
	]);
} else if (NODE_ENV === 'development') {
	plugins = plugins.concat([
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]);
} else {
	console.error('NODE_ENV is not defined');
}

module.exports = {
	optimization: {
		minimizer: [new TerserPlugin()],
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
	},
	devtool: 'source-map', // http://blog.teamtreehouse.com/introduction-source-maps
	entry: {
		app: ['babel-polyfill', 'react-hot-loader/patch', './src/index'],
	},
	output: {
		path: path.join(__dirname, '/build'),
		publicPath: '/',
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						options: {
							emitWarning: true,
						},
						loader: 'eslint-loader',
					},
				],
			},
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							camelCase: true,
						},
					},
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(s*)css$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
					},
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(ttf|otf|eot|svg|jpg|png|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				include: __dirname,
				loader: 'file-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins,
};
