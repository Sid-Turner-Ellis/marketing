import styled from 'styled-components'
import React from 'react'
import mylogo from '../../images/logo.png'

export default function Logo() {
  return (
    <div>
      <Img src={mylogo} />
    </div>
  )
}

const Img = styled.img`
  max-width:100px;
`;