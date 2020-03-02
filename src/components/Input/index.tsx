import * as React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system'

const InputWrapper = styled.input`
	border-radius: 4px;
	${color}
	padding: 2px;
	border: none;
	outline: none;
	${space}
`;

export function Input(props: any) {
	return <InputWrapper {...props as any} > {props.children as any}</InputWrapper>;
}


export default Input