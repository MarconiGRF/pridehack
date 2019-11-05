import React from "react"
import about from "../images/sobre.svg"
import prizes from "../images/premiacao.svg"

const About = () => (
  <div className="aboutContainer">
    <div className="marginTopBot paddingOnSides floatItLeft spaceBot paddingTop zIndexHigh">
      <img className="newImgAdequatorAbout" src={about}></img>
      <p className="textParagraphs">O <b className="boldIt">Pride Hack CIn-UFPE</b> é o primeiro hackathon do Centro de Informática da UFPE com foco no público LGBTQIA+, todo organizado por pessoas da sigla que fazem parte do CIn-UFPE. O evento busca desafiar equipes a desenvolverem soluções inovadoras para a temática da diversidade de gênero e orientação sexual, em busca da equidade e do respeito.</p>
      <br>
      </br>
      <p className="textParagraphs">O Pride Hack acontece nos dias <b>26 e 27 de outubro, a partir das 8h horas, no CIn-UFPE</b>. O evento é aberto para todos, basta preencher o <b className="boldIt"><a className="redHref" href="https://app.shawee.io/login?next=/access-code/26601526">formulário de inscrição</a></b>   e quando o resultado sair nós te avisaremos.</p>
    </div>
  </div>
)

export default About