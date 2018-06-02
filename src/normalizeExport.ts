/**
 * Normalize ES module to get value from default export.
 *
 * @export
 * @param {any} exportedValue Exported value
 * @returns {any}
 */
export default function normalizeExport(exportedValue: any): any {
	return exportedValue.__esModule ? exportedValue.default : exportedValue;
}
