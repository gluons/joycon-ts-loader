import stripBom from 'strip-bom';

const Module = require('module');

/**
 * Require Node module from code string.
 *
 * @export
 * @param {string} code Code string
 * @param {string} [filename=''] File name
 * @returns {any}
 */
export default function requireString(code: string, filename: string = ''): any {
	code = stripBom(code);

	const mod = new Module();
	mod._compile(code, filename);

	return mod.exports;
}
