import React from "react"
import Button from "../../components/shared/Button"
import styled from "styled-components"
export default function LeftLanding() {
  return (
    <Div>
      <H1>SUCCESS STORIES</H1>
      <H6>
        I WANNA BE THE BEST LIKE NOONE EVER WAAAAAS I MEAN COME ON BRO WHATEVER!
      </H6>
      <ButtonWrapper>
        <Button variant="white" text="BOOK YOUR DEMO" />
        <Button variant="header" text="START YOUR DEAL" />
      </ButtonWrapper>
    </Div>
  )
}

const Div = styled.div`
  color: white;
  font-style: italic;
  padding: 50px;
`

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 900;
`

const H6 = styled.h6`
  max-width: 50%;
  padding-bottom: 20px;
  font-size: clamp(1.4rem, 2vw, 2rem);
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`
