import { MultiLoader } from 'joycon';

import { register } from 'ts-node';

import compilerOptions from './compilerOptions';
import normalizeExport from './normalizeExport';

register({
	compilerOptions
});

function loadSync(filepath: string): any {
	const data = require(filepath);

	return normalizeExport(data);
}

function load(filepath: string): Promise<any> {
	const data = loadSync(filepath);

	return Promise.resolve(data);
}

const loader: MultiLoader = {
	test: /\.ts$/,
	load,
	loadSync
};

export default loader;
module.exports = loader;
