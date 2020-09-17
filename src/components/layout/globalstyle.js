import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html{
    /* font-size:clamp(16px,1.5vw,24px);
     */
     font-size:16px;
  }
  *{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
    padding:0px;
    margin:0px;
    }
  }
`
export default GlobalStyle