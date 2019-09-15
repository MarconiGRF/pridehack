import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ColorComponent from "../components/colorComponent"
import ColorComponentOrange from "../components/colorComponentOrange"
import Header from "./header"
import About from "./about"
import Schedule from "./schedule"
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
      <div className="mainContainer">
        <Header siteTitle={data.site.siteMetadata.title} />
        <ColorComponent /> 
        <About />
        <ColorComponentOrange color="green" />
        <Schedule />
      </div>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
