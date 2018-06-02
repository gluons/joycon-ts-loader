"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var pify_1 = __importDefault(require("pify"));
var typescript_1 = __importDefault(require("typescript"));
var Module = require('module');
var tsOptions = {
    module: typescript_1.default.ModuleKind.CommonJS,
    moduleResolution: typescript_1.default.ModuleResolutionKind.NodeJs,
    target: typescript_1.default.ScriptTarget.ES2015,
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
function requireString(code) {
    var m = new Module();
    m._compile(code, '');
    return m.exports;
}
/**
 * Normalize ES module to get value from default export.
 *
 * @param {any} exportedValue Exported value
 * @returns {any}
 */
function normalizeExport(exportedValue) {
    return exportedValue.__esModule ? exportedValue.default : exportedValue;
}
function load(filepath) {
    return pify_1.default(fs_1.readFile)(filepath, 'utf8')
        .then(function (content) {
        var result = typescript_1.default.transpile(content, tsOptions);
        return normalizeExport(requireString(result));
    });
}
function loadSync(filepath) {
    var content = fs_1.readFileSync(filepath, 'utf8');
    var result = typescript_1.default.transpile(content, tsOptions);
    return normalizeExport(requireString(result));
}
var loader = {
    test: /\.ts$/,
    load: load,
    loadSync: loadSync
};
exports.default = loader;
module.exports = loader;
