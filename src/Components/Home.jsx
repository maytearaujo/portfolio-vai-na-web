import React from "react";
import * as S from "./Style" 

import Github from "../assets/github.png"
import Teste from "../assets/teste.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Git from "../assets/git.png"
import React_img from "../assets/react.png"

import Woman from "../assets/woman.jpg"

function Home(){
    return(

        <S.MainHome>
            <S.SectionHome>
                <S.DivSocialMediaHome>
                    {/* ============
                    
                    VERIFICAR ESTA SITUAÇÃO
                    quando coloco o linkedin o projeto não sobe para o vercel
                    - troquei a imagem
                    - Fiz algumas modificações sugeridas no Stack over flow
                    - mudei o nome do arquivo para o teste e funcionou
                    */}
                    <div>                    
                        <a href="https://www.linkedin.com/in/maytearaujo/" target="_blank">
                            <img src={Teste} alt="Logo Linkedin" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/maytearaujo" target="_blank">
                            <img src={Github} alt="Logo Github" />
                        </a>
                    </div>
                </S.DivSocialMediaHome>
                
                <S.DivHomeLeft>
                    <h1>Maytê Araújo</h1>
                    <h2>Desenvolvedora Front End</h2>
                        <h3>Conhecimentos</h3>
                    <S.DivConhecimentos>
                            <img src={HTML} alt="HTML" />
                            <img src={CSS} alt="CSS" />
                            <img src={Javascript} alt="Javascript" />
                            <img src={Git} alt="GIT" />
                            <img src={React_img} alt="React" />
                    </S.DivConhecimentos>
                    {/* <hr /> */}
                        <a href="../assets/CV Mayte Araujo.pdf" download="cv Maytê Araújo.pdf">Acesse
                    meu Curriculo</a>
                </S.DivHomeLeft>
                
                <S.DivHomeRight>
                    <img src={Woman} alt="Capacete de trabalhadores de manutenção" />
                </S.DivHomeRight>
                
            </S.SectionHome>                 
        </S.MainHome>
    )
}

export default Home