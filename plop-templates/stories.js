import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from './Box';

storiesOf('Box').add('with text inside', () => (
	<Fragment>
		<Box m={1} p={1} color="white" backgroundColor="tomato">
			<p>paragraph inside a box m 1 p 1</p>
		</Box>
	</Fragment>
));
