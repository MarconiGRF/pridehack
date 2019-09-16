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
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="scheduleBox stepOnIt">
                    <img className="imgAdequatorSched" src={talk}></img>
                    <h4 className="textSubTitlesSched">Mesa redonda</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="scheduleBox">
                    <img className="imgAdequatorSched" src={selecao}></img>
                    <h4 className="textSubTitlesSched">Seleção</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
                <div className="scheduleBox stepOnIt">
                    <img className="imgAdequatorSched" src={hack}></img>
                    <h4 className="textSubTitlesSched">Hack Pride</h4>
                    <p className="textParagraphsWhite alignCenter">32/04 a 72/19</p>
                </div>
            </div>
            <div>
                <div className="enrollmentAsset"></div>
                <div className="alignCenter">
                    <p className="maxWidthHalf textParagraphsWhite inLineBlock">
                        Cookie ice cream halvah marzipan dessert pudding bonbon. Carrot cake liquorice gummi bears. Lollipop gingerbread jelly gingerbread cake. Soufflé marshmallow pie gingerbread. Chupa chups ice cream brownie icing ice cream icing macaroon. Dessert cookie chocolate cake chocolate cake cake donut pastry gummi bears. Tiramisu chocolate bar caramels caramels jelly beans tart icing sesame snaps. Jelly-o soufflé jujubes wafer pudding lollipop. Sweet roll sesame snaps icing. Jelly beans candy canes gummi bears carrot cake sweet roll. Gummies sweet brownie macaroon bonbon donut chocolate cake jujubes chocolate. Apple pie sweet roll chocolate cake. Cake powder powder lemon drops. Cookie sweet roll cupcake chocolate bar jelly-o.</p>
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
    window.open("https://gatsbyjs.org", "_blank");    
}

function edital(){
    window.open("https://google.com", "_blank");    
}

export default Schedule