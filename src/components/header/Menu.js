import styled from 'styled-components'
import React from 'react'
import arrow from '../../images/down-arrow.svg'
import FarRight from './FarRight'
import Dropdown from './Dropdown'


export default function Menu() {
  return (
    <OuterUL>
      <OuterLI>WHY US
        <Dropdown items={['Professionalism', 'Suits', 'Sexiness', 'Smoking policy']} />
      </OuterLI>
      <OuterLI>WHO WE HELP
        <Dropdown items={['The poor', 'The rich', 'The good', 'The bad', 'The worst (us)']} />
      </OuterLI>
      <OuterLI>SUCCESS STORIES
        <Dropdown items={['VforVendetta', 'ryan (syke)']} />

      </OuterLI>
      <OuterLI>RESOURCES
        <Dropdown items={['Crashing the economy', 'Dancing with dwarfs', 'Edging techniques']} />
      </OuterLI>
      <OuterLI>ABOUT
        <Dropdown end={true} items={['Our locations (online)', 'Fav pubs', 'Fav colors', 'best movie (1980)']} />
      </OuterLI>

      <FarRight />

    </OuterUL>


  )
}

const OuterUL = styled.ul`  
  list-style:none;
  display:flex;
  align-items:center;
  &:hover{
    cursor:pointer;
  }

`;

const OuterLI = styled.li`
  list-style-position:inside;
  position:relative;
  margin-right:${props => props.theme.spacing.headerMarginRight}px;
  font-weight:700;

  & > *{
    display:none;
  }

  &:hover{
    & > *{
    display:block;
  }
  }


  

  &::after{
    content:'';
    width:15px;
    height:15px;
    position:absolute;
    background-image: url(${arrow});
    margin:0px 5px;
    top:50%;
    transform: translateY(-50%);
    left:100%;
    z-index:2;
  
  }

`;

