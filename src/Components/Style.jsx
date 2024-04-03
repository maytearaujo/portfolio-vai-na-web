import styled from "styled-components";

// HEADER
export const Nav = styled.nav`
    background-color: #f6e6e0;
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
    width: 20vw;
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

// HOME
export const Main = styled.main`
    background-color: #7689d8;
    height: 40vh;
`
export const SectionHome = styled.section`
    /* border: solid yellow; */
    display: flex;
    justify-content: space-around;
`
export const DivSocialMediaHome = styled.div`
    /* border: solid green; */

    height: 50vh;
    width: 6vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 

    img{
        height: 3rem;
    }
`

export const DivHomeLeft = styled.div`
    /* border: solid black; */
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const DivConhecimentos = styled.div`
    /* border: solid orange; */

    width: 25vw;
    height: 10%;
    display: flex;
    justify-content: space-around;
    img{
        width: 3rem;;
    }
`

export const DivHomeRight = styled.div`
    /* border: solid red; */
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
`


// FOOTER
export const Footer = styled.footer`
    background-color: #e1b4e5;
    height: 20vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;    /* border: solid yellow; */
    img{
        /* width: 10vw; */
        height: 10vh;
    }
`

export const DivSocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: solid blue; */
`

//  SOBRE



// PROJETOS
