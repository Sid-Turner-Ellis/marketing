import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import person from '../../images/personcrop.png'
import TinySlider from "tiny-slider-react";
import LeftLanding from './LeftLanding'
import useBrowserSize from '../functions/useBrowserSize'

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true
};




const Landing = () => {
  const [w, h] = useBrowserSize(1600)

  return (
    <>
      <Div>
        <LeftLanding />
        <Img multiplier={w} src={person} />
      </Div>
      {/* <TinySlider settings={settings}>

      </TinySlider> */}
    </>
  )
}

const Div = styled.div`
position:relative;
z-index:-2;
padding:0px 30px;
width:100%;
height:80vh;
background-color:${props => props.theme.colors.bluepurple};
display:flex;
align-items:center;
`;

const Img = styled.img`
  position:absolute;
  right: 10%;
  bottom:0px;
  width:450px;
  z-index:-1;
  opacity:${(props => props.multiplier)};
`;



export default Landing