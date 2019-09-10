import * as React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system'

const ButtonWrapper = styled.button`
	border-radius: 8px;
	${color}
	padding: 8px 15px;
	border: none;
	outline: none;
	${space}
`;

export function Button(props: any) {
	return <ButtonWrapper {...props as any} > {props.children as any}</ButtonWrapper>;
}


export default Button;
