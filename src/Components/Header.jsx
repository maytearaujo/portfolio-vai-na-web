import React from "react";
import Home from "./Home"
import Sobre from "./Sobre"
import Projetos from "./Projetos"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as  S from "./Style"


function Header(){
    return(
        <BrowserRouter>
        <S.Nav>
            <S.DivLogo>
                <Link to="/">&lt; Maytê's &frasl;&gt;</Link>
            </S.DivLogo>

            <S.DivNav>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/Projetos">Projetos</Link>
                </li>
            </S.DivNav>
        </S.Nav>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Sobre" element={<Sobre />} />
            <Route path="Projetos" element={<Projetos />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Header