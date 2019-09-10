import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from './Box';

storiesOf('Box').add('with text inside', () => (
	<Fragment>
		<Box m={1} p={1} color="white" backgroundColor="tomato">
			<p>paragraph inside a box m 1 p 1</p>
		</Box>
		<Box m={2} p={2} color="white" backgroundColor="tomato">
			<p>pargaraph inside a box m 2 p 2</p>
		</Box>
		<Box m={3} p={3} color="white" backgroundColor="tomato">
			<p>paragraph inside a box m 3 p 3</p>
		</Box>
		<Box m={0} p={4} color="black" backgroundColor="lightgray">
			<p>paragraph inside a box m 0 p 4</p>
		</Box>
	</Fragment>
));
