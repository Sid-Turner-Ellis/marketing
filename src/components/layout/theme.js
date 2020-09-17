import styled, { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    white: "#FFFFFF",
    lightblue: "#00BFFF",
    blue: "#236080",
    darkblue: "#171E34",
    bluepurple: "#555EDD",
  },
  spacing: {
    headerMarginRight: 40,
  },
  font: {
    headerFontWeight: "700",
    headerFontSize: "1rem",
    liFontSize: "1rem",
    liFontWeight: "400",
  },
  breakpoints: {
    xs: "@media screen and (max-width: 340px)",
    sm: "@media screen and (min-width: 500px)",
    md: "@media screen and (min-width: 768px)",
    lg: "@media screen and (min-width: 1024px)",
    xl: "@media screen and (min-width: 1580px)",
  },
}
export default theme
