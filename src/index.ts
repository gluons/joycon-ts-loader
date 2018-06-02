import { readFile, readFileSync } from 'fs';
import { MultiLoader } from 'joycon';
import pify from 'pify';
import ts, { CompilerOptions } from 'typescript';

const Module = require('module');

const tsOptions: CompilerOptions = {
	module: ts.ModuleKind.CommonJS,
	moduleResolution: ts.ModuleResolutionKind.NodeJs,
	target: ts.ScriptTarget.ES2015,
	lib: [
		'es2015'
	]
};

/**
 * Require Node module from code string.
 *
 * @param {string} code Code string
 * @returns {any}
 */
function requireString(code: string): any {
	const m = new Module();
	m._compile(code, '');

	return m.exports;
}

/**
 * Normalize ES module to get value from default export.
 *
 * @param {any} exportedValue Exported value
 * @returns {any}
 */
function normalizeExport(exportedValue: any): any {
	return exportedValue.__esModule ? exportedValue.default : exportedValue;
}

function load(filepath: string): Promise<any> {
	return pify(readFile)(filepath, 'utf8')
		.then((content: string) => {
			const result: string = ts.transpile(content, tsOptions);

			return normalizeExport(requireString(result));
		});
}

function loadSync(filepath: string): any {
	const content: string = readFileSync(filepath, 'utf8');
	const result: string = ts.transpile(content, tsOptions);

	return normalizeExport(requireString(result));
}

const loader: MultiLoader = {
	test: /\.ts$/,
	load,
	loadSync
};

export default loader;
module.exports = loader;
