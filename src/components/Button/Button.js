import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

// Components are functions, and they must start with a capital letter
function Button(props) {
	// {...props} uses the the ES6 spread operator to send any props you may pass
	// along without changing any of the contents. This is basically just creating
	// a copy to pass along
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

// This export will be picked up in ./index.js
export default Button;
