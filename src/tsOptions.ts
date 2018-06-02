import {
	CompilerOptions,
	ModuleKind,
	ModuleResolutionKind,
	ScriptTarget
} from 'typescript';

/**
 * TypeScript compiler options.
 */
const tsOptions: CompilerOptions = {
	module: ModuleKind.CommonJS,
	moduleResolution: ModuleResolutionKind.NodeJs,
	target: ScriptTarget.ES2015,
	lib: [
		'es2015'
	]
};

export default tsOptions;
