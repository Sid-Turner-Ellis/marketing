import styled from 'styled-components'
import React, { useState, useContext } from 'react'
import Button from '../../components/shared/Button'



export default function FarRight() {
  return (
    <>
      <Login>LOGIN</Login>
      <Button variant='header' />
    </>
  )
}

const Div = styled.div`
`;

const Login = styled.p`
  margin-right:${props => props.theme.spacing.headerMarginRight - 20}px;
  font-weight:${props => props.theme.font.headerFontWeight};
  font-size:${props => props.theme.font.headerFontSize};


`;