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
	default: () => Projects,
	prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require('../../chunks/index-38cedc01.js');
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'h2.svelte-1n3tz5u.svelte-1n3tz5u{font-size:2rem;margin-bottom:0;margin-top:1rem}img.svelte-1n3tz5u.svelte-1n3tz5u{width:100%;object-fit:cover;height:max(10rem, 25vh)}.card.svelte-1n3tz5u.svelte-1n3tz5u{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);perspective:150rem;transition:0.3s;position:relative;height:35rem;max-width:500px;margin:1em;box-shadow:none;background:none;display:flex;flex-direction:column;align-content:center;justify-content:flex-start;flex:0 1 30em}.card-side.svelte-1n3tz5u.svelte-1n3tz5u{box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2);height:27rem;transition:all 0.3s ease;backface-visibility:hidden;position:absolute;width:80%;padding:1rem 2rem;color:white}.card-side.back.svelte-1n3tz5u.svelte-1n3tz5u{transform:rotateY(-180deg);display:flex;flex-direction:column;display:flex;align-items:center;justify-content:space-between}.card.svelte-1n3tz5u:hover .card-side.front.svelte-1n3tz5u{transform:rotateY(180deg)}.card.svelte-1n3tz5u:hover .card-side.back.svelte-1n3tz5u{transform:rotateY(0deg)}.links.svelte-1n3tz5u.svelte-1n3tz5u{display:flex;margin-right:1rem}')();
const css$1 = {
	code: 'h2.svelte-1n3tz5u.svelte-1n3tz5u{font-size:2rem;margin-bottom:0;margin-top:1rem}img.svelte-1n3tz5u.svelte-1n3tz5u{width:100%;object-fit:cover;height:max(10rem, 25vh)}.card.svelte-1n3tz5u.svelte-1n3tz5u{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);perspective:150rem;transition:0.3s;position:relative;height:35rem;max-width:500px;margin:1em;box-shadow:none;background:none;display:flex;flex-direction:column;align-content:center;justify-content:flex-start;flex:0 1 30em}.card-side.svelte-1n3tz5u.svelte-1n3tz5u{box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2);height:27rem;transition:all 0.3s ease;backface-visibility:hidden;position:absolute;width:80%;padding:1rem 2rem;color:white}.card-side.back.svelte-1n3tz5u.svelte-1n3tz5u{transform:rotateY(-180deg);display:flex;flex-direction:column;display:flex;align-items:center;justify-content:space-between}.card.svelte-1n3tz5u:hover .card-side.front.svelte-1n3tz5u{transform:rotateY(180deg)}.card.svelte-1n3tz5u:hover .card-side.back.svelte-1n3tz5u{transform:rotateY(0deg)}.links.svelte-1n3tz5u.svelte-1n3tz5u{display:flex;margin-right:1rem}',
	map: null
};
const Card = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	let { title = 'Unknown title' } = $$props;
	let {
		src = {
			'/src/lib/images/space.png': () =>
				Promise.resolve().then(() => __toESM(require('../../chunks/space-007e88c7.js')))
		}
	} = $$props;
	let { alt = 'An image' } = $$props;
	let { github = 'https://github.com/karolinfrennert' } = $$props;
	let { info = 'Some more info about the project' } = $$props;
	let { website = 'https://github.com/karolinfrennert' } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	if ($$props.github === void 0 && $$bindings.github && github !== void 0)
		$$bindings.github(github);
	if ($$props.info === void 0 && $$bindings.info && info !== void 0) $$bindings.info(info);
	if ($$props.website === void 0 && $$bindings.website && website !== void 0)
		$$bindings.website(website);
	$$result.css.add(css$1);
	return `<article class="${'card svelte-1n3tz5u'}"><div class="${'card-side front svelte-1n3tz5u'}"><img${(0,
	import_index_38cedc01.b)('src', src, 0)}${(0, import_index_38cedc01.b)(
		'alt',
		alt,
		0
	)} class="${'svelte-1n3tz5u'}">
		<div class="${'text-content'}"><h2 class="${'title svelte-1n3tz5u'}">${(0, import_index_38cedc01.e)(
		title
	)}</h2></div></div>
	<div class="${'card-side back svelte-1n3tz5u'}"><p>${(0, import_index_38cedc01.e)(info)}</p>
		<div class="${'links svelte-1n3tz5u'}"><p><a${(0, import_index_38cedc01.b)(
		'href',
		github,
		0
	)}>View on Github</a></p>
			<p><a${(0, import_index_38cedc01.b)(
				'href',
				website ? website : github,
				0
			)}>Test it out</a></p></div></div>
</article>`;
});
var projects_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'.card-grid.svelte-9ic3hj{display:flex;flex-wrap:wrap;justify-content:center}')();
const css = {
	code: '.card-grid.svelte-9ic3hj{display:flex;flex-wrap:wrap;justify-content:center}',
	map: null
};
const prerender = true;
let cards = [
	{
		id: 1,
		title: 'Tetris',
		src: '',
		alt: 'tetris game with colorful pieces',
		info: 'I wanted to challenge myself and build someting that is both fun and tricky. What better way than to build something that I am already familiar with the logic of, but never have created myself. Built using TypeScript and React.',
		github: 'https://github.com/karolinfrennert/tetris-react',
		website: 'https://tetris.frennert.com/'
	},
	{
		id: 2,
		title: 'Date planner',
		src: '',
		alt: '',
		info: '',
		github: 'https://github.com/karolinfrennert/Brief-3-API',
		website: 'https://date-planner.netlify.app/'
	},
	{
		id: 3,
		title: 'Itsy Bitsy Space',
		src: '',
		alt: 'Small man on a dark blue background with start',
		info: '',
		github: 'https://github.com/karolinfrennert/Bitsy-Space',
		website: 'https://bitsy.frennert.com/'
	},
	{
		id: 4,
		title: 'FindBucketList.com',
		src: '',
		alt: 'Small man on a dark blue background with start',
		info: '',
		github: '',
		website: 'https://findbucketlist.com/'
	}
];
const Projects = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Projects</title>`), '')
		}<meta name="${'description'}" content="${'Portfolio'}" data-svelte="svelte-t52rx">`),
		'')
	}

<h1 id="${'projects'}">Projects</h1>
<hr class="${'solid'}">

<div class="${'card-grid svelte-9ic3hj'}">${(0, import_index_38cedc01.d)(cards, (card) => {
		return `${(0, import_index_38cedc01.v)(Card, 'Card').$$render(
			$$result,
			{
				title: card.title,
				src: card.src,
				alt: card.alt,
				info: card.info,
				github: card.github,
				website: card.website
			},
			{},
			{}
		)}`;
	})}
</div>`;
});
