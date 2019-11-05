import React from "react"
import realization from "../images/realizacao.svg"
import support from "../images/apoio.svg"
import pet from "../images/pet.png"
import citi from "../images/citi.png"
import cin from "../images/cin.svg"
import vinta from "../images/vinta.png"
import vtex from "../images/vtex.svg"
import shawee from "../images/shawee.png"
import fablab from "../images/fablab.png"

const SupportedBy = () => (
    <div className="aboutContainer paddingTop">
        <div className="maxWidthHalf adjustingPadding floatItLeft spaceBot paddingTop">
            <img src={realization}></img>
            <div className="alignCenter">
                <a target="_blank" href="http://cin.ufpe.br"><img className="marginTopBotLow cinContainer" src={cin}></img></a>
                <a target="_blank" href="http://pet.cin.ufpe.br/"><img className="marginTopBotLow petContainer inLineBlock" src={pet}></img></a>
                <a target="_blank" href="http://citi.org.br/"><img className="marginTopBotLow citiContainer" src={citi}></img></a>
            </div>
        </div>
        <div className="maxWidthHalf adjustingPadding floatItLeft paddingTop marginTopBotLow">
                <img className="supportContainer" src={support}></img>
            <div className="alignCenter">
                <a target="_blank" href="https://www.vinta.com.br/"><img className=" marginTopBotLow vintaContainer" src={vinta}></img></a>
                <a target="_blank" href="https://www.fablabrecife.com/"><img className="marginTopBotLow fablabContainer" src={fablab}></img></a>
                <a target="_blank" href="https://shawee.io/" ><img className="marginTopBotLow shaweeContainer" src={shawee}></img></a>
                <a target="_blank" href="https://vtex.com/br-pt/"><img className="marginTopBotLow vtexContainer" src={vtex}></img></a>
            </div>
        </div>
  </div>
)

export default SupportedBy