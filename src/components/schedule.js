import React from "react"
import schedule from "../images/schedule.svg"
import inscricoes from "../images/inscricoes.svg"
import talk from "../images/talk.svg"
import selecao from "../images/selection.svg"
import hack from "../images/hack.svg"
import inscricoes2 from "../images/inscricoes2.svg"

const Schedule = () => (
      <div>
        <div className="slanteDivTwo">
            <div>
                <img className="imgAdequatorAbout adjustingPadding" src={schedule}></img>
            </div>
            <div class="alignCenter paddingTopLow">
                <div className="adjustingPadding ">
                    <img className="imgAdequatorSched spaceLeftHigh" src={inscricoes}></img>
                    <h4 className="textSubTitlesSched">Inscrições</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="floatItLeft">
                    <img className="veryMuchSpecificFreakingImgAdequatorForTalkOmgImHungry adjustingPadding" src={talk}></img>
                    <h4 className="textSubTitlesSched">Mesa redonda</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="floatItLeft">
                    <img className="imgAdequatorSched adjustingPadding" src={selecao}></img>
                    <h4 className="textSubTitlesSched">Seleção</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="floatItLeft">
                    <img className="imgAdequatorSched adjustingPadding" src={hack}></img>
                    <h4 className="textSubTitlesSched">Hack Pride</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <img src={inscricoes2}></img>
                
            </div>
        </div>
      </div>
)

export default Schedule