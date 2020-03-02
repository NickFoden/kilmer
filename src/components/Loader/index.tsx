import * as React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system';

const LoaderWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	border: 16px solid #f3f3f3;
	border-top: 16px solid #f05327;
	${color}
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;
	margin-top: -60px;
	margin-left: -60px;
	${space}
`;

export function Loader(props: any) {
	return <LoaderWrapper {...props} />;
}

export default Loader;
