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
	manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
	appDir: '_app',
	assets: /* @__PURE__ */ new Set([
		'favicon.png',
		'robots.txt',
		'svelte-welcome.png',
		'svelte-welcome.webp'
	]),
	mimeTypes: { '.png': 'image/png', '.txt': 'text/plain', '.webp': 'image/webp' },
	_: {
		entry: {
			file: 'start-64ce1d95.js',
			js: ['start-64ce1d95.js', 'chunks/index-4a8c88ce.js', 'chunks/preload-helper-60cab3ee.js'],
			css: []
		},
		nodes: [
			() => Promise.resolve().then(() => __toESM(require('./nodes/0.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/1.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/3.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/2.js'))),
			() => Promise.resolve().then(() => __toESM(require('./nodes/4.js')))
		],
		routes: [
			{
				type: 'page',
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				path: '/',
				shadow: null,
				a: [0, 2],
				b: [1]
			},
			{
				type: 'page',
				id: 'contact',
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: '/contact',
				shadow: null,
				a: [0, 3],
				b: [1]
			},
			{
				type: 'page',
				id: 'projects',
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: '/projects',
				shadow: null,
				a: [0, 4],
				b: [1]
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
