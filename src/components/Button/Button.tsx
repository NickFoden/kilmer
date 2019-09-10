import * as React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

function Button(props: any) {
	return <ButtonWrapper {...props as any} > {props.children as any}</ButtonWrapper>;
}

export default Button;
