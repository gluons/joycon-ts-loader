import { readFile, readFileSync } from 'fs';
import { MultiLoader } from 'joycon';
import pify from 'pify';
import { transpileModule } from 'typescript';

import normalizeExport from './normalizeExport';
import requireString from './requireString';
import tsOptions from './tsOptions';

async function load(filepath: string): Promise<any> {
	const content: string = await pify(readFile)(filepath, 'utf8');
	const result = transpileModule(content, {
		compilerOptions: tsOptions
	});
	const output = result.outputText;

	return normalizeExport(requireString(output));
}

function loadSync(filepath: string): any {
	const content: string = readFileSync(filepath, 'utf8');
	const result = transpileModule(content, {
		compilerOptions: tsOptions
	});
	const output = result.outputText;

	return normalizeExport(requireString(output));
}

const loader: MultiLoader = {
	test: /\.ts$/,
	load,
	loadSync
};

export default loader;
module.exports = loader;
