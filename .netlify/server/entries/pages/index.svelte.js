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
	default: () => Routes,
	prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require('../../chunks/index-38cedc01.js');
var import_contact_svelte = __toESM(require('./contact.svelte.js'));
var import_projects_svelte = __toESM(require('./projects.svelte.js'));
var Cat_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	".container.svelte-zgo4bm{height:200px;width:350px;position:relative;transform:translate(-50%, 40%);left:50%;top:50%}.cat.svelte-zgo4bm{background-color:rgb(175, 163, 144);height:65px;width:80px;border-radius:0 80px 80px 0;position:absolute;bottom:60px;right:50px}.ear.svelte-zgo4bm{height:15px;width:15px;background-color:rgb(175, 163, 144);position:absolute;bottom:64px;left:8px;border-radius:20px 0 0 0;box-shadow:25px 0 rgb(175, 163, 144)}.eye.svelte-zgo4bm,.eye.svelte-zgo4bm:before{height:7px;width:10px;border:2px solid #2c2c2c;position:absolute;border-radius:0 0 15px 15px;border-top:none}.eye.svelte-zgo4bm{top:18px;left:15px}.eye.svelte-zgo4bm:before{content:'';left:30px}.nose.svelte-zgo4bm{background-color:#ffffff;height:12px;width:12px;border-radius:50%;position:absolute;top:32px;left:25px;box-shadow:12px 0 #ffffff}.nose.svelte-zgo4bm:before{content:'';width:12px;height:8px;position:absolute;background-color:#ffffff;left:6px}.nose.svelte-zgo4bm:after{content:'';position:absolute;height:0;width:0;border-top:8px solid #ef926b;border-left:5px solid transparent;border-right:5px solid transparent;bottom:7px;left:6px}.mouth.svelte-zgo4bm{background-color:#2c2c2c;height:15px;width:17px;position:absolute;border-radius:0 0 5px 5px;top:38px;left:27px;animation:svelte-zgo4bm-mouth-move 2s infinite;transform-origin:top}@keyframes svelte-zgo4bm-mouth-move{50%{transform:scaleY(0.7)}}.body.svelte-zgo4bm{background-color:rgb(175, 163, 144);height:90px;width:140px;position:absolute;right:65px;bottom:0;border-radius:60px 60px 0 0;animation:svelte-zgo4bm-sleep 2s infinite;transform-origin:bottom right}@keyframes svelte-zgo4bm-sleep{50%{transform:scale(0.9, 1.05)}}.tail.svelte-zgo4bm{background-color:rgb(78, 70, 56);height:20px;width:100px;position:absolute;right:150px;bottom:0;border-radius:20px 0 0 20px}.body.svelte-zgo4bm:before{content:'';position:absolute;background-color:#ffffff;height:12px;width:30px;border-radius:6px;bottom:0;left:22px;box-shadow:45px 0 #ffffff}.bubble.svelte-zgo4bm{height:20px;width:20px;background-color:rgba(255, 255, 255, 0.4);position:absolute;left:65px;top:20px;border-radius:50px 50px 50px 5px;animation:svelte-zgo4bm-bubble-scale 2s infinite}@keyframes svelte-zgo4bm-bubble-scale{50%{transform:scale(1.6)}}.shadow.svelte-zgo4bm{height:10px;width:240px;background-color:rgba(0, 0, 0, 0.2);border-radius:10px;position:absolute;bottom:52px;left:70px;animation:svelte-zgo4bm-shadow 2s infinite}@keyframes svelte-zgo4bm-shadow{50%{transform:scaleX(0.7)}}")();
const css$1 = {
	code: ".container.svelte-zgo4bm{height:200px;width:350px;position:relative;transform:translate(-50%, 40%);left:50%;top:50%}.cat.svelte-zgo4bm{background-color:rgb(175, 163, 144);height:65px;width:80px;border-radius:0 80px 80px 0;position:absolute;bottom:60px;right:50px}.ear.svelte-zgo4bm{height:15px;width:15px;background-color:rgb(175, 163, 144);position:absolute;bottom:64px;left:8px;border-radius:20px 0 0 0;box-shadow:25px 0 rgb(175, 163, 144)}.eye.svelte-zgo4bm,.eye.svelte-zgo4bm:before{height:7px;width:10px;border:2px solid #2c2c2c;position:absolute;border-radius:0 0 15px 15px;border-top:none}.eye.svelte-zgo4bm{top:18px;left:15px}.eye.svelte-zgo4bm:before{content:'';left:30px}.nose.svelte-zgo4bm{background-color:#ffffff;height:12px;width:12px;border-radius:50%;position:absolute;top:32px;left:25px;box-shadow:12px 0 #ffffff}.nose.svelte-zgo4bm:before{content:'';width:12px;height:8px;position:absolute;background-color:#ffffff;left:6px}.nose.svelte-zgo4bm:after{content:'';position:absolute;height:0;width:0;border-top:8px solid #ef926b;border-left:5px solid transparent;border-right:5px solid transparent;bottom:7px;left:6px}.mouth.svelte-zgo4bm{background-color:#2c2c2c;height:15px;width:17px;position:absolute;border-radius:0 0 5px 5px;top:38px;left:27px;animation:svelte-zgo4bm-mouth-move 2s infinite;transform-origin:top}@keyframes svelte-zgo4bm-mouth-move{50%{transform:scaleY(0.7)}}.body.svelte-zgo4bm{background-color:rgb(175, 163, 144);height:90px;width:140px;position:absolute;right:65px;bottom:0;border-radius:60px 60px 0 0;animation:svelte-zgo4bm-sleep 2s infinite;transform-origin:bottom right}@keyframes svelte-zgo4bm-sleep{50%{transform:scale(0.9, 1.05)}}.tail.svelte-zgo4bm{background-color:rgb(78, 70, 56);height:20px;width:100px;position:absolute;right:150px;bottom:0;border-radius:20px 0 0 20px}.body.svelte-zgo4bm:before{content:'';position:absolute;background-color:#ffffff;height:12px;width:30px;border-radius:6px;bottom:0;left:22px;box-shadow:45px 0 #ffffff}.bubble.svelte-zgo4bm{height:20px;width:20px;background-color:rgba(255, 255, 255, 0.4);position:absolute;left:65px;top:20px;border-radius:50px 50px 50px 5px;animation:svelte-zgo4bm-bubble-scale 2s infinite}@keyframes svelte-zgo4bm-bubble-scale{50%{transform:scale(1.6)}}.shadow.svelte-zgo4bm{height:10px;width:240px;background-color:rgba(0, 0, 0, 0.2);border-radius:10px;position:absolute;bottom:52px;left:70px;animation:svelte-zgo4bm-shadow 2s infinite}@keyframes svelte-zgo4bm-shadow{50%{transform:scaleX(0.7)}}",
	map: null
};
const Cat = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<div class="${'container svelte-zgo4bm'}"><div class="${'shadow svelte-zgo4bm'}"></div>
	<div class="${'cat svelte-zgo4bm'}"><div class="${'ear svelte-zgo4bm'}"></div>
		<div class="${'eye svelte-zgo4bm'}"></div>
		<div class="${'mouth svelte-zgo4bm'}"></div>
		<div class="${'nose svelte-zgo4bm'}"></div>
		<div class="${'tail svelte-zgo4bm'}"></div>
		<div class="${'body svelte-zgo4bm'}"></div>
		<div class="${'bubble svelte-zgo4bm'}"></div></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'section.svelte-1knldq9{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1knldq9{width:100%}.subtitle.svelte-1knldq9{text-align:center;font-size:1.25rem}.pink.svelte-1knldq9{color:var(--accent-color)}.content.svelte-1knldq9{max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;padding:0 1rem}')();
const css = {
	code: 'section.svelte-1knldq9{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1knldq9{width:100%}.subtitle.svelte-1knldq9{text-align:center;font-size:1.25rem}.pink.svelte-1knldq9{color:var(--accent-color)}.content.svelte-1knldq9{max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;padding:0 1rem}',
	map: null
};
const prerender = true;
const Routes = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Home</title>`), '')
		}<meta name="${'description'}" content="${'Portfolio'}" data-svelte="svelte-1c9fmdk">`),
		'')
	}
${(0, import_index_38cedc01.v)(Cat, 'Cat').$$render($$result, {}, {}, {})}
<section class="${'svelte-1knldq9'}"><div class="${'content svelte-1knldq9'}"><h1 id="${'home'}" class="${'svelte-1knldq9'}">Hello! I&#39;m <span class="${'pink svelte-1knldq9'}">Karolin</span>.
		</h1>
		<h2 class="${'subtitle svelte-1knldq9'}">Based in Stockholm, Sweden</h2>
		<hr class="${'solid'}">
		<p>With a passion for code, problem solving and pixel perfect user interfaces. I am currently
			creating technical solutions at Svenska Spel, where I am part of developing our new Design
			System.
		</p>
		<p>Apart from this, I like to create websites for external clients helping them to get suitable
			user interfaces and bring their ideas to life.
		</p>
		<p>When I am not coding I love to cook and eat, travel, train and hang our with my cat.</p></div></section>
${(0, import_index_38cedc01.v)(import_projects_svelte.default, 'Projects').$$render(
	$$result,
	{},
	{},
	{}
)}
${(0, import_index_38cedc01.v)(import_contact_svelte.default, 'Contact').$$render(
	$$result,
	{},
	{},
	{}
)}`;
});
