import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Flex from './Flex';

const itemArray = [
	<div style={{ backgroundColor: 'red' }}>One</div>,
	<div style={{ backgroundColor: 'gray' }}>Two</div>,
	<div style={{ backgroundColor: 'blue' }}>Three</div>,
];

storiesOf('Flex').add('with column and row', () => (
	<Fragment>
		<Flex flexDirection="column" p="2">
			<div style={{ backgroundColor: 'red' }}>One</div>
			<div style={{ backgroundColor: 'gray' }}>Two</div>
			<div style={{ backgroundColor: 'blue' }}>Three</div>
		</Flex>
		<Flex flexDirection="row" p="2">
			<div style={{ backgroundColor: 'red' }}>One</div>
			<div style={{ backgroundColor: 'gray' }}>Two</div>
			<div style={{ backgroundColor: 'blue' }}>Three</div>
		</Flex>
	</Fragment>
));
