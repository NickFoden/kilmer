"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const ButtonWrapper = styled_components_1.default.button `
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;
function Button(props) {
    return React.createElement(ButtonWrapper, Object.assign({}, props),
        " ",
        props.children);
}
exports.default = Button;
