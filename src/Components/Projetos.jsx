import React from "react";
import * as S from "./Style";
import Github from "../assets/github.png";
import Globe from "../assets/globe.png";

import Borcelle from "../assets/projetos/borcelle.jpg";
import Fantastika from "../assets/projetos/Fantastika.jpg";
import Cartoon from "../assets/projetos/cartoon.jpg";

function Projetos() {
  return (
    <S.MainProjetos>
      <h2>Projetos</h2>
      <S.Cards>
        <S.Card>
          <h3>Fantastika</h3>
          <img src={Fantastika} alt="Fantastika" />
          <h4>Desenvolvido em HTML e CSS.</h4>
          <p>
            Projeto de conclusão do  1º módulo do curso de desenvolvimento web para mulheres realizado pelo Vai Na Web.
          </p>
          <S.DivSocialMediaProjetos>
            <a href="https://maytearaujo.github.io/Fantastika/" target="_blank">
              <img src={Globe} alt="Fantastica" />
            </a>
            <a href="https://github.com/maytearaujo/Fantastika.git" target="_blank">
              <img src={Github} alt="Projeto Github" />
            </a>
          </S.DivSocialMediaProjetos>

        </S.Card>

        <S.Card>
          <h3>Doceria Borcelle</h3>
          <img src={Borcelle} alt="Doceria Borcelle" />
          <h4>Desenvolvido em HTML, CSS e React.</h4>
          <p>Projeto desenvolvido durante as aulas de React no curso de desenvolvimento web para mulheres realizado pelo Vai na Web.
          </p>
          <S.DivSocialMediaProjetos>
            <a href="https://doceria-borcelle.vercel.app/" target="_blank">
              <img src={Globe} alt="Doceria Borcelle" />
            </a>
            <a href="https://github.com/maytearaujo/doceria-borcelle.git" target="_blank">
              <img src={Github} alt="Projeto Github" />
            </a>            
          </S.DivSocialMediaProjetos>
        </S.Card>

        <S.Card>
          <h3>Cartoon Network</h3>
          <img src={Cartoon} alt="Cartoon" />
          <h4>Desenvolvido em HTML, CSS, React, Styled Components.</h4>
          <p>Projeto desenvolvido durante as aulas de React no curso de desenvolvimento web para mulheres realizado pelo Vai na Web.
          </p>
          <S.DivSocialMediaProjetos>
            <a href="https://cartoon-network-xi.vercel.app/" target="_blank">
              <img src={Globe} alt="Cartoon" />
            </a>
            <a href="https://github.com/maytearaujo/cartoon-network.git" target="_blank">
              <img src={Github} alt="Projeto Github" />
            </a>
            
          </S.DivSocialMediaProjetos>
        </S.Card>




      </S.Cards>
    </S.MainProjetos>
  );
}

export default Projetos;
