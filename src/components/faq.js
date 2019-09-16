import React from "react"
import faq from "../images/faq.svg"
import logo from '../images/logo.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import OpenerIcon from "./openerIcon"
import FaqButton from "./faqButton"

const Faq = () => (
    <div>
        <div className="slanteDivFour">
            <div className="imgAdequatorScheduleContainer adjustingPadding">
                <img className="imgAdequatorFaq marginTopBotLower" src={faq}></img>
                <FaqButton active={false} number="Lady Gaga" p="I'm beautiful in my way/
                                                                'Cause God makes no mistakes/
                                                                I'm on the right track, baby/
                                                                I was born this way..." 
                 color="prideRed"/>
                
                <FaqButton active={false} number="Mistress Barbara" p="Come on, be proud of who you are/
                                                                       Shout it out, you see, it's not so hard!"
                 color="prideOrange"/>
                
                <FaqButton active={false} number="Hayley Kiyoko" p="Saw your face, heard your name/
                                                                    Gotta get with you/
                                                                    Girls like girls like boys do, nothing new/
                                                                    Isn't this why we came? Gotta get with you/
                                                                    Girls like girls like boys do, nothing new..."
                 color="prideYellow"/>
                
                <FaqButton active={false} number="Todrick Hall" p="Girl, what did that girl just say, girl? /
                                                                   Girl, I don't dance, I work/
                                                                   I don't play, I slay/
                                                                   I don't walk I strut, strut, strut and then sashay (okay)..."
                 color="prideGreen"/>
                
                <FaqButton active={false} number="Ariana Grande" p="I want it, I got it, I want it, I got it/
                                                                    You like my hair? Gee, thanks, just bougt it/
                                                                    I see it, I like it, I want it, I got it (yeah)..."
                 color="prideBlue"/>
                
                <FaqButton active={false} number="Troye Sivan" p="You don't have to say I love you to say I love you/
                                                                  Forget all the shooting stars and all the silver moons/
                                                                  We've been making shades of purple out of red and blue/
                                                                  Sickeningly sweet like honey, don't need money/
                                                                  All I need is you..."
                 color="pridePurple"/>
            </div>



            <div className="footerContainer">
                <div>
                <img className="footerLogo" src={logo}></img>
                </div>
                <div>
                    <a href="https://fb.me/"><img className="footerSocial" src={facebook}></img></a>
                    <a href="https://instagr.am/"><img className="footerSocial" src={instagram}></img></a>
                </div>
            </div>

        </div>
    </div>
)

function act() {
    var acc = document.getElementsByClassName("accordion");
    console.log(acc);
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

export default Faq