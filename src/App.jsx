import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  )
}

export default App