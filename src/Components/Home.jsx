import React from "react";
import * as S from "./Style" 

import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Git from "../assets/git.png"
import React_img from "../assets/react.png"

import Curriculo from "../assets/CV_Mayte_Araujo.pdf"

import Woman from "../assets/woman.jpg"

function Home(){
    return(

        <S.MainHome>
            {/* <S.SectionHome> */}
                <S.DivSocialMediaHome>
                    <div>                    
                        <a href="https://www.linkedin.com/in/maytearaujo/" target="_blank">
                            <img src={Linkedin} alt="Logo Linkedin" />
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
                    <a href={Curriculo} download="cv Maytê Araújo.pdf">Acesse
                    meu Curriculo</a>
                </S.DivHomeLeft>
                
                <S.DivHomeRight>
                    <img src={Woman} alt="Capacete de trabalhadores de manutenção" />
                </S.DivHomeRight>
                
            {/* </S.SectionHome>                  */}
        </S.MainHome>
    )
}

export default Home