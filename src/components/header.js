import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.svg'
import rainbow from '../images/rainbow.svg'

const Header = ({ siteTitle }) => (
  <header className="slanteDivOne">
    <div className="headerDivs">
      <div className="imgAdequatorLogo">
        <img className="marginTopBot" src={logo}></img>
        <button onClick={handleClick} className="buttonAdequator marginTopBotLow buttonTextMargin">
          inscreva-se
        </button>
      </div>
      
      <div className="imgAdequatorRainbow">
        <img className="marginTopBot" src={rainbow}></img>
      </div>
    </div>
  </header>
)

function handleClick() {
  window.open('http://gatsbyJS.org', "_blank");
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
