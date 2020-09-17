import React from "react"
import cardData from "../data/cardData"
import styled from "styled-components"



export default function slider() {
  return (
    <Container>
        {cardData.map(obj => (
          <CardOuter>{obj.name}</CardOuter>
        ))}
    </Container>
  )
}

const Container = styled.div`
  width:300px;
  height:200px;
`;

const CardOuter = styled.div`

`;