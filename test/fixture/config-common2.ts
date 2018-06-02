import { Configuration } from 'webpack';

const config: Configuration = {
	entry: 'x.js',
	output: {
		path: './dist',
		filename: 'bundle.js',
		library: 'X',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts']
	},
	devtool: 'source-map'
};

export = config;
