import React from "react"
import realization from "../images/realizacao.svg"
import support from "../images/apoio.svg"

const SupportedBy = () => (
    <div className="aboutContainer paddingTop">
        <div className="maxWidthHalf adjustingPadding floatItLeft spaceBot paddingTop">
            <img className="" src={realization}></img>
        </div>
        <div className="maxWidthHalf adjustingPadding floatItLeft paddingTop marginTopBotLow">
            <img className="marginTopHigh" src={support}></img>
        </div>
  </div>
)

export default SupportedBy