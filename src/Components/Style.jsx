import styled from "styled-components";

// HEADER
export const Nav = styled.nav`
    background-color: aquamarine;
    height: 8vh;

    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    
    font-size: 1.5rem;

    a{
        text-decoration: none;
    }
`

export const DivLogo = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 15vw;
`
export const DivNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 35vw;
    list-style-type: none;
    
    a{
        text-decoration: none;
    }
`

// MAIN
export const Main = styled.main`
    background-color: cadetblue;
`

// FOOTER
export const Footer = styled.footer`
    background-color: red;
`