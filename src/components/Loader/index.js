import * as React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

const LoaderWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	border: 16px solid ${(props) => props.border};
	border-top: 16px solid ${(props) => props.borderTop};
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;
	margin-top: -60px;
	margin-left: -60px;
`;

export function Loader(border = '#f3f3f3', borderTop = '#f05327') {
	return <LoaderWrapper border={border} borderTop={borderTop} />;
}

export default Loader;
