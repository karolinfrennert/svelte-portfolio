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
	default: () => Contact,
	prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require('../../chunks/index-38cedc01.js');
var contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'.content.svelte-w2gnip{width:100%;max-width:var(--column-width);margin:1em auto 0 auto;padding:0 1rem}')();
const css = {
	code: '.content.svelte-w2gnip{width:100%;max-width:var(--column-width);margin:1em auto 0 auto;padding:0 1rem}',
	map: null
};
const prerender = true;
const Contact = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Contacts</title>`), '')
		}<meta name="${'description'}" content="${'Portfolio'}" data-svelte="svelte-fczhqa">`),
		'')
	}

<div class="${'content svelte-w2gnip'}"><h1 id="${'contact'}">Contact me</h1>
	<hr class="${'solid'}">
	<p>Let\u2019s stay in touch!</p>
	<p>You can find my more of my projects on <a href="${'https://github.com/karolinfrennert'}">GitHub</a>
		or get in contact on <a href="${'https://linkedin.com/in/karolinfrennert'}">LinkedIn</a> and occationally
		read my tweets on Twitter!
	</p>
</div>`;
});
