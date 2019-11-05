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
                <FaqButton active={false} question="Onde e quando ocorrerá?" p="O Pride Hack ocorrerá nos dias 23/11 e 24/11, no Centro de Informática da Universidade Federal de Pernambuco (CIn - UFPE)." 
                 color="prideRed"/>
                
                <FaqButton active={false} question=" Qual será o tema?" p="O tema será 'Como melhorar a vivência LGBTQIA+ na universidade?' "
                 color="prideOrange"/>
                
                <FaqButton active={false} question=" Como funcionará?" p="O evento acontecerá nos dias 23/11 e 24/11 das 8h às 19h.
                                                                        Sábado
                                                                        Manhã: formação de equipes, debate sobre o tema e desenvolvimento da solução;
                                                                        Tarde: desenvolvimento da solução;
                                                                        Noite: status report das equipes e desenvolvimento da solução.

                                                                        Domingo
                                                                        Manhã: desenvolvimento da solução;
                                                                        Tarde: workshop sobre pitch, desenvolvimento da solução e submissão dos projetos.
Noite: apresentação dos pitches e seleção dos vencedores"

                 color="prideYellow"/>
                
                <FaqButton active={false} question="O que devo levar?" p="Computador, itens de higiene pessoal e quaisquer outros objetos de uso pessoal (ex: celular, fone de ouvido, entre outros...). A alimentação será proporcionada pelo próprio evento. 😉"
                 color="prideGreen"/>
                
                <FaqButton active={false} question="Quem pode participar?" p="Estudantes maiores de 18 anos matriculados em cursos de graduação e pós-graduação na UFPE. Não é necessário experiência ou conhecimento prévio em computação ou em qualquer outra área."
                 color="prideBlue"/>
                
                <FaqButton active={false} question="Não sou LGBTQIA+, posso participar?" p="Infelizmente, não. 😕
Desde o começo, idealizamos o Pride Hack como uma forma de acolher e proporcionar espaços de protagonismo para a comunidade LGBTQIA+. Por esse motivo, decidimos abrir as inscrições apenas para membros da comunidade."
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