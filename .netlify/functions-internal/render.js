const { init } = require('../serverless.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set(['favicon.png', 'robots.txt', 'svelte-welcome.png', 'svelte-welcome.webp']),
	mimeTypes: { '.png': 'image/png', '.txt': 'text/plain', '.webp': 'image/webp' },
	_: {
		entry: {
			file: 'start-64ce1d95.js',
			js: ['start-64ce1d95.js', 'chunks/index-4a8c88ce.js', 'chunks/preload-helper-60cab3ee.js'],
			css: []
		},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [],
		matchers: async () => {
			return {};
		}
	}
});
