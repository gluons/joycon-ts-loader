import chalk from 'chalk';
import JoyCon from 'joycon';
import { resolve } from 'path';
import { Configuration } from 'webpack';

import JoyConTSLoader from '../dist';

const joycon = new JoyCon({
	cwd: resolve(__dirname, './fixture'),
	stopDir: __dirname
});

joycon.addLoader(JoyConTSLoader);

const expectedConfig: Configuration = {
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

describe('Load TypeScript config', () => {
	it(chalk`should load TypeScript config via {magenta "module.exports = config"} successfully`, async () => {
		const { data, path } = await joycon.load(['config-common1.ts']);
		expect(path).toEqual(expect.stringMatching(/config\-common1\.ts$/));
		expect(data).toEqual(expectedConfig);
	});
	it(chalk`should load TypeScript config via {magenta "export = config"} successfully`, async () => {
		const { data, path } = await joycon.load(['config-common2.ts']);
		expect(path).toEqual(expect.stringMatching(/config\-common2\.ts$/));
		expect(data).toEqual(expectedConfig);
	});
	it(chalk`should load TypeScript config via {magenta "export default config"} successfully`, async () => {
		const { data, path } = await joycon.load(['config-es.ts']);
		expect(path).toEqual(expect.stringMatching(/config\-es\.ts$/));
		expect(data).toEqual(expectedConfig);
	});
});
