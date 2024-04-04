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
    

    color: #7689d8;
  line-height: 1.5;
  position: relative;
}

a::before {
  content: '';
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #7689d8;
  position: absolute;
  bottom: -.25rem;
  left: 50%;
  transition: width .4s, left .4s;
}

a:hover::before {
  width: 100%;
  left: 0;
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
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: left;
    /* border: solid red; */
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

    img:hover {
  background-color: #e1b4e5;
  border-radius: 50%;
  transform: scale(1.1);
  }
`

export const DivHomeLeft = styled.div`
    /* border: solid black; */
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img:hover {
  /* background-color: #f6e6e0; */
  /* border-radius: 50%; */
  transform: scale(1.1);
  }
  
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

    img{
        width: 25rem;
        border-radius: 50%;
    }
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

    img:hover {
  background-color: #7689d8;
  border-radius: 50%;
  transform: scale(1.1);
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
