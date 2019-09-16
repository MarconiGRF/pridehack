import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ColorComponent from "../components/colorComponent"
import ColorComponentOrange from "../components/colorComponentOrange"
import ColorComponentBlue from "../components/colorComponentBlue"
import ColorComponentPurple from "../components/colorComponentPurple"
import Header from "./header"
import About from "./about"
import Schedule from "./schedule"
import SupportedBy from "./supportedBy"
import Faq from "./faq"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet> 
        <meta charSet="utf-8" />
        <title>Pride Hack</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mainContainer">
        <Header siteTitle={data.site.siteMetadata.title} />
        <ColorComponent /> 
        <About />
        <ColorComponentOrange color="green" />
        <Schedule />
        <ColorComponentBlue /> 
        <SupportedBy />
        <ColorComponentPurple /> 
        <Faq />   
      </div>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
