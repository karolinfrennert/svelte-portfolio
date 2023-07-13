var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	css: () => css,
	entry: () => entry,
	index: () => index,
	js: () => js,
	module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require('../entries/pages/index.svelte.js'));
const index = 3;
const entry = 'pages/index.svelte-61f6e2e6.js';
const js = [
	'pages/index.svelte-61f6e2e6.js',
	'chunks/index-4a8c88ce.js',
	'pages/contact.svelte-26174bfb.js',
	'pages/projects.svelte-c344d5d9.js',
	'chunks/preload-helper-60cab3ee.js'
];
const css = [
	'assets/pages/index.svelte-7d57ebcf.css',
	'assets/pages/contact.svelte-801e54ad.css',
	'assets/pages/projects.svelte-4929bf3b.css'
];
