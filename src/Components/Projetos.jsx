import React from "react";
import * as S from "./Style";
import Github from "../assets/github.png";
import Globe from "../assets/globe.png";
import ElasNaTech from "../assets/projetos/elas-na-tech.jpg";
import Borcele from "../assets/projetos/Borcele.jpg";
import Fantastika from "../assets/projetos/Fantastika.jpg";

function Projetos() {
  return (
    <S.MainProjetos>
      <h2>Projetos</h2>
      <S.Cards>
        <S.Card>
          <h3>Fantastika</h3>
          <img src={Fantastika} alt="Fantastika" />
          <p>
            Projeto de conclusão do  1º módulo do curso de desenvolvimento web para mulheres realizado pelo Vai Na Web.
          </p>
          <S.DivSocialMediaProjetos>
            <img src={Globe} alt="Portfolio Elas na Tech" />
            
            <img src={Github} alt="Projeto Github" />
            
          </S.DivSocialMediaProjetos>
        </S.Card>

        <S.Card>
          <h3>Elas na tech</h3>
          <img src={ElasNaTech} alt="Elas na Tech" />
          <p>
            Projeto de conclusão do programa de formação [Elas na_tech], de
            desenvolvimento web para mulheres realizado pela Junior Achievement
            Brasil, com o patrocínio da CCR e apoio da Skillsbuild da IBM.
          </p>
          <S.DivSocialMediaProjetos>
            <img src={Globe} alt="Portfolio Elas na Tech" />
            
            <img src={Github} alt="Projeto Github" />
            
          </S.DivSocialMediaProjetos>
        </S.Card>

        <S.Card>
          <h3>Borcele</h3>
          <img src={Borcele} alt="Borcele" />
          <p>
            Projeto desenvolvido durante as aulas de React no curso de 
            desenvolvimento web para mulheres realizado pelo Vai na Web.
          </p>
          <S.DivSocialMediaProjetos>
            <img src={Globe} alt="Portfolio Elas na Tech" />
            
            <img src={Github} alt="Projeto Github" />
            
          </S.DivSocialMediaProjetos>
        </S.Card>

      </S.Cards>
    </S.MainProjetos>
  );
}

export default Projetos;
