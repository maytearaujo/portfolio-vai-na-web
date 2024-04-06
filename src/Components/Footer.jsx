import React from "react";
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import * as S from "./Style"

function Footer(){
    return(
        <S.SectionFooter>
            <S.DivSocialMedia>
                <a href="https://www.linkedin.com/in/maytearaujo/" target="_blank">
                    <img src={Linkedin} alt="Logo Linkedin" />
                </a>
                <a href="https://github.com/maytearaujo" target="_blank">
                    <img src={Github} alt="Logo Github" />
                </a>
            </S.DivSocialMedia>
            <p>By Maytê Araújo</p>
        </S.SectionFooter>
    )
}

export default Footer