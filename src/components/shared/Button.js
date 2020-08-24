import styled, { css } from 'styled-components'
import React from 'react'

const ButtonStyle = styled.button`
  padding:8px 20px;
  border:none;
  outline:none;
  font-weight:${props => props.theme.font.headerFontWeight};
  font-size:${props => props.theme.font.headerFontSize};

  &:hover{
    cursor:pointer;
  }
  ${({ variant }) =>
    variant == 'header' && css`
    background-color:${props => props.clicked ? props.theme.colors.blue : props.theme.colors.lightblue};
    color:${({ theme }) => theme.colors.white}
    `
  }



`;



const Button = ({ text, variant, clicked, onMouseDown, onMouseUp }) => {

  return (
    <ButtonStyle clicked={clicked} variant={variant} onMouseDown={onMouseDown} onMouseUp={onMouseUp} >{text || 'CHOOSE YOUR DEAL'}</ButtonStyle>
  )
}

export default Button