import styled, { css } from 'styled-components'
import React from 'react'


export default function Dropdown({ items, end }) {
  if (items) {
    return (
      <DropdownUL end={end} >
        {items.map(item => <DropdownLI>{item}</DropdownLI>)}
      </DropdownUL>
    )
  }
  return <div></div>
}


const DropdownUL = styled.ul`
  position: absolute;
  top:100%;
  min-width:250px;
  padding:10px;
  padding-left:0px;
  background-color:white;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.75);
  ${ props =>
    props.end && css`
    right:0%;
    text-align:right;
    padding:10px;
    padding-right:0px;
    `
  }

`;

const DropdownLI = styled.li`
  font-size:${({ theme }) => theme.font.liFontSize};
  font-weight:${({ theme }) => theme.font.liFontWeight};
  list-style:none;
  list-style-position:outside;
  padding:10px;

  &:hover{
    background-color:#EDEDED;
  }

`;