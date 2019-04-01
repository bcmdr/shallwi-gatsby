import React from "react"
// import { Link } from "gatsby"


import Layout from "../components/layout"
import Hero from "../components/hero"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`shallwi`, `web design`, `graphic design`, `logo`, `website`, `edmonton`]} />
    <Hero
      body="Love your brand with a logo and website you can take pride in."
    ></Hero>
  </Layout>
)

export default IndexPage
