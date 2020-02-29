import{createElement as n}from"react";import t from"styled-components";import{color as o,space as r,flexbox as e}from"styled-system";const i=t.div`
    box-sizing: 'border-box';
    min-width: 0;
    ${o}
    ${r}
  `;function s(t){return n(i,Object.assign({},t)," ",t.children)}const d=t.button`
	border-radius: 8px;
	${o}
	padding: 8px 15px;
	border: none;
	outline: none;
	${r}
`;function c(t){return n(d,Object.assign({},t),t.children)}const p=t.div`
    display: flex;
    ${o}
    ${e}
    ${r}
  `;function b(t){return n(p,Object.assign({},t)," ",t.children)}export{s as Box,c as Button,b as Flex};
