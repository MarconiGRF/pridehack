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
            <div className="imgAdequatorScheduleContainer">
                <img className="imgAdequatorAbout adjustingPadding" src={schedule}></img>
            </div>
            <div className="alignCenter marginTopBotLower scheduleWrapper">
                <div className="scheduleBox">
                    <img className="imgAdequatorSched" src={inscricoes}></img>
                    <h4 className="textSubTitlesSched">Inscrições</h4>
                    <p className="textParagraphsWhite alignCenter">04/11 a 10/11</p>
                </div>
                <div className="scheduleBox stepOnIt">
                    <img className="imgAdequatorSched" src={talk}></img>
                    <h4 className="textSubTitlesSched">Bootcamps</h4>
                    <p className="textParagraphsWhite alignCenter">11/11 a 12/11</p>
                </div>
                <div className="scheduleBox">
                    <img className="imgAdequatorSched" src={selecao}></img>
                    <h4 className="textSubTitlesSched">Seleção</h4>
                    <p className="textParagraphsWhite alignCenter">12/11 a 20/11</p>
                </div>
                <div className="scheduleBox stepOnIt">
                    <img className="imgAdequatorSched" src={hack}></img>
                    <h4 className="textSubTitlesSched">Hack Pride</h4>
                    <p className="textParagraphsWhite alignCenter">23/11 e 24/11</p>
                </div>
            </div>
            <div>
                <div className="enrollmentAsset"></div>
                <div className="alignCenter">
                        <br/>
                        <div className="inLineBlock maxWidthHalf twentyWidth spaceRight marginTopBotLower">
                            <button onClick={inscricao} className="inLineBlock buttonAdequator buttonTextMargin">
                                ler o edital</button>
                        </div>
                        <div className="inLineBlock maxWidthHalf twentyWidth spaceLeft">
                            <button onClick={edital} className="buttonAdequator buttonTextMargin">
                                inscreva-se</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
)

function inscricao(){
    window.open("https://app.shawee.io/login?next=/access-code/26601526", "_blank");    
}

function edital(){
    window.open("https://google.com", "_blank");    
}

export default Schedule