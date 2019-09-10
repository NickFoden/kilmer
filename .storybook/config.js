import {
	// addParameters,
	configure,
} from '@storybook/react';
// import theme from './theme';

// addParameters({
// 	options: {
// 		theme: theme,
// 	},
// });

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
