import React from "react"
import about from "../images/sobre.svg"
import prizes from "../images/premiacao.svg"

const About = () => (
  <div className="aboutContainer">
    <div className="maxWidthHalf adjustingPadding floatItLeft spaceBot paddingTop">
      <img className=" imgAdequatorAbout" src={about}></img>
      <p className="textParagraphs">O PrideHack é um Hackathon organizado pelo professor Kiev Gama, será realizado nos dias 26 e 27 de outubro, para pessoas LGBTQIA+ que não precisam ser da área de computação. Todo o evento será organizado e mentorado por pessoas da sigla!</p>
    </div>
    <div className="maxWidthHalf adjustingPadding floatItLeft paddingTop">
      <img className="marginTopHigh" src={prizes}></img>

      <div className="spaceBot alignLeft">
        <p className="textTitles floatItLeft spaceRight">1</p>
        <p className="textSubTitles">Em breve</p>
      </div>

      <div className="spaceBot alignLeft">
        <p className="textTitles floatItLeft spaceRight">2</p>
        <p className="textSubTitles">Em breve</p>
      </div>

      <div className="spaceBot alignLeft">
        <p className="textTitles floatItLeft spaceRight">3</p>
        <p className="textSubTitles">Em breve</p>
      </div>
    </div>
  </div>
)

export default About