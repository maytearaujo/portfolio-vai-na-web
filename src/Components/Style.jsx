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
  letter-spacing: 0.2rem;

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

  @media (max-width: 768px) {
    height: 35vh;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20vw;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35vw;
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    /* height: 30vh; */
  }
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

  @media (max-width: 768px) {
    display: none;
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
    font-size: 1.5rem;
    color: #fff;
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
    /* height: 8vh; */
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
  justify-content: space-evenly;

  width: 24%;
  img {
    width: 6vw;
    /* height: 8vh; */
  }
  /* border: solid blue; */
`;

//  SOBRE
export const MainSobre = styled.main`
  background-color: #7689d8;
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5% 2.5%;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }
`;

export const DivSobre = styled.div`
  /* border: solid red; */
  padding: 1vw;

  p {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    line-height: 1.8;
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;

  }
`;
/* @media screen and (max-width: 768px) {
    p {
      font-size: clamp(2rem, 2.5vw, 3rem);
    }
  } */

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
    padding-bottom: 0;
  }
`;

export const Cards = styled.div`
  /* border: solid red; */

  width: 99%;
  height: 90%;

  display: flex;

  justify-content: space-evenly;

  padding: 1rem 0;

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
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

  .imgProjeto {
    width: 90%;
    height: 50%;
    /* border: solid violet; */
    padding: 0.3rem 0;
  }

  img:hover {
    transform: scale(1.1);
  }

  div {
    padding-top: 0.8rem;
    width: 90%;
  }

  p {
    /* border: solid yellow; */
    margin: 0.8rem;
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
