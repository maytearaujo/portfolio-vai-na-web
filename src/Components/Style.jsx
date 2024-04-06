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
  font-weight: 700;
  letter-spacing: .2rem;

  a {
    color: #7689d8;
    text-decoration: none;

    line-height: 1.5;
    /* position: relative; */
  }

  a:hover {
    color: #fff;
    font-weight: 800;
    /* transform: scale(1.3); */
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20vw;
`;
export const DivNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35vw;
  list-style-type: none;
`;

// HOME
export const MainHome = styled.main`
  background-color: #7689d8;
  height: 76vh;
  display: flex;
  align-items: center;
  justify-content: left;
  /* border: solid red; */
`;
export const SectionHome = styled.section`
  /* border: solid yellow; */
  display: flex;
  /* justify-content: space-between; */
`;
export const DivSocialMediaHome = styled.div`
  /* border: solid green; */

  /* height: 50vh; */
  width: 10vw;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  div {
    /* border: solid pink; */

    height: 20%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  img {
    height: 2rem;
  }

  img:hover {
    background-color: #e1b4e5;
    border-radius: 50%;
    transform: scale(1.1);
  }
`;

export const DivHomeLeft = styled.div`
  /* border: solid black; */
  width: 30vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    border: 1rem;
    padding: 1rem;
    font-size: 2rem;
    /* font-style: italic bolder; */
  }

  h2 {
    border: 1rem;
    padding-bottom: 3.5rem;
  }

  h3 {
    padding-bottom: 0.8rem;
    font-size: 1.3rem;
  }

  a {
    padding-top: 1.5rem;
    text-decoration: none;
  }
`;
export const DivConhecimentos = styled.div`
  border-top: 2rem;
  /* padding: 1px; */

  width: 25vw;
  height: 10%;
  display: flex;
  justify-content: space-around;

  img {
    width: 3rem;
  }

  img:hover {
    transform: scale(1.5);
  }
`;

export const DivHomeRight = styled.div`
  /* border: solid red; */
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;

    max-width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

// FOOTER
export const SectionFooter = styled.footer`
  background-color: #e1b4e5;
  height: 16vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; /* border: solid yellow; */
  img {
    /* width: 10vw; */
    height: 8vh;
  }

  img:hover {
    background-color: #7689d8;
    border-radius: 50%;
    transform: scale(1.1);
  }
`;

export const DivSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 10%;
  /* border: solid blue; */
`;

//  SOBRE
export const MainSobre = styled.main`
  background-color: #7689d8;
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.9rem;
  }

  p {
    padding: 3.5rem;
    line-height: 1.8;
    font-size: 1.35rem;
  }
`;

// PROJETOS
export const MainProjetos = styled.main`
  background-color: #7689d8;
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: top;

  h2 {
    font-size: 1.8rem;
  }
`;

export const Cards = styled.div`
  /* border: solid red; */

  width: 99%;
  height: 90%;

  display: flex;

  justify-content: space-evenly;
  /* align-items: center; */

  padding: 1rem;

  p, h3, h4{
    font-size: 1.3rem;
  }
`;

export const Card = styled.div`
  /* border: solid green; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  width: 35%;

  img {
    width: 90%;
    height: 50%;
  }

  img:hover {
    /* background-color: #e1b4e5; */
    /* border-radius: 50%; */
    transform: scale(1.1);
  }
`;

export const DivSocialMediaProjetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: solid pink; */

  width: 40%;

  padding: 0.6rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
  }

  img:hover {
    background-color: #e1b4e5;
    border-radius: 50%;
    transform: scale(1.1);
  }
`;
