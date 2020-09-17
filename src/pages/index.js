import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/Landing.js"
import Slider from "../components/slider/Slider.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Landing /> */}
    <Slider />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
