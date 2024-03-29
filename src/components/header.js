import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.svg'
import rainbow from '../images/rainbow.svg'


const Header = ({ siteTitle }) => (
  <header className="slanteDivOne">
    <div className="headerDivs">
      <div className="imgAdequatorLogo">
        <img className="marginTop" src={logo}></img>
        <button onClick={handleClick} className="buttonAdequator marginTopBotLow buttonTextMargin">
          inscreva-se
        </button>
      </div>
      
      <div className="imgAdequatorRainbow">
        <img className="marginTop" src={rainbow}></img>
      </div>
    </div>
  </header>
)

function handleClick() {
  window.open('http://bit.ly/inscricao-pridehack', "_blank");
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header