module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{name}}/stories.js',
				templateFile: 'plop-templates/stories.js',
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/index.js',
				templateFile: 'plop-templates/index.js',
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.tsx',
				templateFile: 'plop-templates/starter.tsx',
			},
		],
	});
};
