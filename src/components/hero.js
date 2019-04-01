// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./hero.css"

const Hero = ({title, tagline, body}) => (
  <section
    style={{
      background: `#01b3e0`,
      color: `white`,
      padding: `6rem 6rem`,
      minHeight: `100vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`
    }}
  >
    <p
      style={{
        fontSize: `3.5rem`,
        fontWeight: `bold`,
        lineHeight: `1.2em`,
      }}
    >
      {body}
    </p>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
