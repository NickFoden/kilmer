import * as React from 'react';
import styled from 'styled-components';
import { color, flexbox, space } from 'styled-system'

const StyledFlex= styled.div`
    display: flex;
    ${color}
    ${flexbox}
    ${space}
  `

export function Flex(props: any) {
	return <StyledFlex {...props as any} > {props.children as any}</StyledFlex>;
}


export default Flex
