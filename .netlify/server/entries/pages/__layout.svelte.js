var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require('../../chunks/index-38cedc01.js');
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'nav.svelte-1plr0tp.svelte-1plr0tp{display:flex;justify-content:space-evenly;--background:rgba(255, 255, 255, 0.7)}nav.svelte-1plr0tp a.svelte-1plr0tp{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}ul.svelte-1plr0tp.svelte-1plr0tp{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1plr0tp.svelte-1plr0tp{position:relative;height:100%}a.svelte-1plr0tp.svelte-1plr0tp:hover{color:var(--accent-color)}')();
const css$2 = {
	code: 'nav.svelte-1plr0tp.svelte-1plr0tp{display:flex;justify-content:space-evenly;--background:rgba(255, 255, 255, 0.7)}nav.svelte-1plr0tp a.svelte-1plr0tp{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}ul.svelte-1plr0tp.svelte-1plr0tp{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1plr0tp.svelte-1plr0tp{position:relative;height:100%}a.svelte-1plr0tp.svelte-1plr0tp:hover{color:var(--accent-color)}',
	map: null
};
const Footer = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);
	return `<footer><nav class="${'svelte-1plr0tp'}"><ul class="${'svelte-1plr0tp'}"><li class="${'svelte-1plr0tp'}"><a href="${'https://kit.svelte.dev'}" class="${'svelte-1plr0tp'}">Email </a></li>
			<li class="${'svelte-1plr0tp'}"><a href="${'https://kit.svelte.dev'}" class="${'svelte-1plr0tp'}">Github </a></li>
			<li class="${'svelte-1plr0tp'}"><a href="${'https://kit.svelte.dev'}" class="${'svelte-1plr0tp'}">LinkedIn </a></li></ul></nav>
</footer>`;
});
const getStores = () => {
	const stores = (0, import_index_38cedc01.g)('__svelte__');
	return {
		page: {
			subscribe: stores.page.subscribe
		},
		navigating: {
			subscribe: stores.navigating.subscribe
		},
		get preloading() {
			console.error('stores.preloading is deprecated; use stores.navigating instead');
			return {
				subscribe: stores.navigating.subscribe
			};
		},
		session: stores.session,
		updated: stores.updated
	};
};
const page = {
	subscribe(fn) {
		const store = getStores().page;
		return store.subscribe(fn);
	}
};
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'header.svelte-jeczk1.svelte-jeczk1{display:flex;justify-content:center}nav.svelte-jeczk1.svelte-jeczk1{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7);border-bottom:1px solid var(--accent-color)}svg.svelte-jeczk1.svelte-jeczk1{width:2em;height:3em;display:block}path.svelte-jeczk1.svelte-jeczk1{fill:var(--background)}ul.svelte-jeczk1.svelte-jeczk1{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-jeczk1.svelte-jeczk1{position:relative;height:100%}nav.svelte-jeczk1 a.svelte-jeczk1{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-jeczk1.svelte-jeczk1:hover{color:var(--accent-color)}')();
const css$1 = {
	code: 'header.svelte-jeczk1.svelte-jeczk1{display:flex;justify-content:center}nav.svelte-jeczk1.svelte-jeczk1{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7);border-bottom:1px solid var(--accent-color)}svg.svelte-jeczk1.svelte-jeczk1{width:2em;height:3em;display:block}path.svelte-jeczk1.svelte-jeczk1{fill:var(--background)}ul.svelte-jeczk1.svelte-jeczk1{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-jeczk1.svelte-jeczk1{position:relative;height:100%}nav.svelte-jeczk1 a.svelte-jeczk1{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-jeczk1.svelte-jeczk1:hover{color:var(--accent-color)}',
	map: null
};
const Header = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = (0, import_index_38cedc01.a)(page, (value) => ($page = value));
	$$result.css.add(css$1);
	$$unsubscribe_page();
	return `<header class="${'svelte-jeczk1'}"><nav class="${'svelte-jeczk1'}"><svg viewBox="${'0 0 2 3'}" aria-hidden="${'true'}" class="${'svelte-jeczk1'}"><path d="${'M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'}" class="${'svelte-jeczk1'}"></path></svg>
		<ul class="${'svelte-jeczk1'}"><li class="${[
		'svelte-jeczk1',
		$page.url.pathname === '/#home' ? 'active' : ''
	]
		.join(' ')
		.trim()}"><a sveltekit:prefetch href="${'/#home'}" class="${'svelte-jeczk1'}">Home</a></li>

			<li class="${['svelte-jeczk1', $page.url.pathname === '/#projects' ? 'active' : '']
				.join(' ')
				.trim()}"><a sveltekit:prefetch href="${'/#projects'}" class="${'svelte-jeczk1'}">Projects</a></li>
			<li class="${['svelte-jeczk1', $page.url.pathname === '/#contact' ? 'active' : '']
				.join(' ')
				.trim()}"><a sveltekit:prefetch href="${'/#contact'}" class="${'svelte-jeczk1'}">Contact</a></li></ul>
		<svg viewBox="${'0 0 2 3'}" aria-hidden="${'true'}" class="${'svelte-jeczk1'}"><path d="${'M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'}" class="${'svelte-jeczk1'}"></path></svg></nav>

	<div class="${'corner'}"></div>
</header>`;
});
var app = /* @__PURE__ */ (() =>
	"\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300;500&family=Vollkorn&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&family=Vollkorn&display=swap');\n/* fira-mono-cyrillic-ext-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* fira-mono-cyrillic-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* fira-mono-greek-ext-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* fira-mono-greek-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* fira-mono-latin-ext-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* fira-mono-latin-400-normal*/\n@font-face {\n  font-family: 'Fira Mono';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n:root {\n	font-family: 'Montserrat', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';\n	--heading-font: 'Vollkorn', serif;\n	--pure-white: #ffffff;\n	--primary-color: #b9c6d2;\n	--secondary-color: #fcf8f7;\n	--tertiary-color: #fcf8f7;\n	--accent-color: #faa88a;\n	--heading-color: rgba(0, 0, 0, 0.7);\n	--text-color: #444444;\n	--cat-color: rgb(175, 163, 144);\n	--background-without-opacity: rgba(255, 255, 255, 0.7);\n	--column-width: 42rem;\n	--column-margin-top: 4rem;\n	box-sizing: border-box;\n}\nbody {\n	min-height: 100vh;\n	margin: 0;\n	background-color: var(--primary-color);\n	background: linear-gradient(\n		180deg,\n		var(--pure-white) 0%,\n		var(--secondary-color) 10.45%,\n		var(--tertiary-color) 41.35%\n	);\n}\n#svelte {\n	min-height: 100vh;\n	display: flex;\n	flex-direction: column;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n	font-family: 'Vollkorn', serif;\n}\nh1,\nh2,\np {\n	font-weight: 400;\n	color: var(--heading-color);\n}\np {\n	line-height: 1.5;\n}\na {\n	color: var(--accent-color);\n	text-decoration: none;\n}\na:hover {\n	text-decoration: underline;\n}\nh1 {\n	font-size: 3rem;\n	text-align: center;\n}\nh2 {\n	font-size: 1rem;\n}\npre {\n	font-size: 16px;\n	background-color: rgba(255, 255, 255, 0.45);\n	border-radius: 3px;\n	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);\n	padding: 0.5em;\n	overflow-x: auto;\n	color: var(--text-color);\n}\ninput,\nbutton {\n	font-size: inherit;\n	font-family: inherit;\n}\nbutton:focus:not(:focus-visible) {\n	outline: none;\n}\n.solid {\n	border-top: 2px solid var(--accent-color);\n	width: 10%;\n}\n")();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'main.svelte-5uxk2q{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:80rem;margin:0 auto;box-sizing:border-box}')();
const css = {
	code: 'main.svelte-5uxk2q{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:80rem;margin:0 auto;box-sizing:border-box}',
	map: null
};
const _layout = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${(0, import_index_38cedc01.v)(Header, 'Header').$$render($$result, {}, {}, {})}
<main class="${'svelte-5uxk2q'}">${slots.default ? slots.default({}) : ``}</main>
${(0, import_index_38cedc01.v)(Footer, 'Footer').$$render($$result, {}, {}, {})}`;
});
