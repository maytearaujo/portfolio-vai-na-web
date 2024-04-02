import React from "react";
import Linkedin from "../assets/linkedIn.png"
import GitHub from "../assets/github.png"
import * as S from "./Style"

function Footer(){
    return(
        <S.Footer>
            <img src={Linkedin} alt="Logo Linkedin" />
            <img src={GitHub} alt="Logo GitHub" />
        </S.Footer>
    )
}

export default Footer