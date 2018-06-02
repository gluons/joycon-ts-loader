import { readFile, readFileSync } from 'fs';
import { MultiLoader } from 'joycon';
import pify from 'pify';
import { transpile } from 'typescript';

import normalizeExport from './normalizeExport';
import requireString from './requireString';
import tsOptions from './tsOptions';

function load(filepath: string): Promise<any> {
	return pify(readFile)(filepath, 'utf8')
		.then((content: string) => {
			const result: string = transpile(content, tsOptions);

			return normalizeExport(requireString(result));
		});
}

function loadSync(filepath: string): any {
	const content: string = readFileSync(filepath, 'utf8');
	const result: string = transpile(content, tsOptions);

	return normalizeExport(requireString(result));
}

const loader: MultiLoader = {
	test: /\.ts$/,
	load,
	loadSync
};

export default loader;
module.exports = loader;
