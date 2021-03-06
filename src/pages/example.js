import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      body="Love your brand with a logo and website makeover you can take pride in."
    ></Hero>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
