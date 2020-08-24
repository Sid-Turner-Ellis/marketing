import React from 'react'
import styled from 'styled-components'
import person from '../../images/person.png'
const Landing = () => {
  return (
    <Div>

    </Div>
  )
}

const Div = styled.div`
width:100%;
height:80vh;
background-color:${props => props.theme.colors.bluepurple};
background-image: url(${person});
background-size:cover;
`;

export default Landing