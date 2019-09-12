import React from "react"
import about from "../images/sobre.svg"
import prizes from "../images/premiacao.svg"

const SectionTwo = () => (
  <header>
    <div>
        <div className="maxWidthHalf floatItLeft">
            <img className=" imgAdequatorAbout" src={about}></img> 
            <p className="textParagraphs">O PrideHack é um Hackathon organizado pelo professor Kiev Gama, será realizado nos dias 26 e 27 de outubro, para pessoas LGBTQIA+ que não precisam ser da área de computação. Todo o evento será organizado e mentorado por pessoas da sigla!</p>
        </div>
        <div className="maxWidthHalf floatItLeft">
          <img className="marginTopHigh" src={prizes}></img> 
          
          <div className=" spaceBot">
            <p className="textTitles floatItLeft">1</p>
            <p className="textSubTitles floatItLeft spaceLeft">Em breve</p>
          </div>
          
          <div className="floatItLeft spaceBot">
            <p className="textTitles floatItLeft">2</p>
            <p className="textSubTitles floatItLeft spaceLeft">Em breve</p>
          </div>

          <div className="floatItLeft spaceBot">
            <p className="textTitles floatItLeft">3</p>
            <p className="textSubTitles floatItLeft spaceLeft">Em breve</p>
          </div>
        </div>
    </div>
  </header>
)

export default SectionTwo