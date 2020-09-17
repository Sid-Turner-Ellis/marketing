import styled, { css } from "styled-components"
import React from "react"

const ButtonStyle = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  font-weight: ${props => props.theme.font.headerFontWeight};
  font-size: ${props => props.theme.font.headerFontSize};
  display: block;
  &:hover {
    cursor: pointer;
  }
  ${({ variant }) =>
    variant == "header" &&
    css`
      background-color: ${props => props.theme.colors.lightblue};
      color: ${({ theme }) => theme.colors.white};
      &:active {
        background-color: ${props => props.theme.colors.blue};
      }
    `}
  ${({ variant }) =>
    variant == "white" &&
    css`
      background-color: white;
      color: ${({ theme }) => theme.colors.lightblue};
      &:active {
        display: none;
      }
    `}
`

const Button = ({ text, variant }) => {
  return (
    <ButtonStyle variant={variant}>{text || "CHOOSE YOUR DEAL"}</ButtonStyle>
  )
}

export default Button
