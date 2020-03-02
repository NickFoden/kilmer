import * as React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system'

const StyledBox = styled.div`
    box-sizing: 'border-box';
    min-width: 0;
    ${color}
    ${space}
  `

export function Box(props: any) {
	return <StyledBox {...props as any} > {props.children as any}</StyledBox>;
}


export default Box;
