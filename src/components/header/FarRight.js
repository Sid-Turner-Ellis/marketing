import styled from 'styled-components'
import React, { useState } from 'react'
import Button from '../../components/shared/Button'




export default function FarRight() {

  const [clicked, setClicked] = useState(false)
  return (
    <>
      <Login>LOGIN</Login>
      <Button onMouseDown={() => {
        setClicked(true)
      }} variant='header' clicked={clicked} onMouseUp={() => {
        setClicked(false)
      }} />
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