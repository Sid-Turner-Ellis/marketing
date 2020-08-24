import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Menu from './Menu'
import Logo from './Logo'
import FarRight from './FarRight'


const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display:flex;
  padding:10px 20px;
  align-items:center;
  justify-content:space-between;


`;


