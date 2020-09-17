import React from "react"
import styled from "styled-components"

export default function Card({ obj }) {
  return (
    <>
      <OuterCard>{obj.name}</OuterCard>
    </>
  )
}

const OuterCard = styled.div`
  display: inline-block;
  width: 150px;
  background-color: red;
`
