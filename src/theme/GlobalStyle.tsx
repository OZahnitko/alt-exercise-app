import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    background-color: #FFF9EB;

    font-family: "Inter", sans-serif;
    font-size: 16px;

    height: 100%;

    line-height: 14px;

    margin: 0;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;

    padding: 0;

    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin: 0;

    font-family: "Nunito", sans-serif;
  
    padding: 0;
  }

  h1 {
    font-size: 32px; 

    line-height: 24px; 
  }

  h2 {
    font-size: 24px;
    
    line-height: 18px; 
  }

  input {
    font-family: "Inter", sans-serif;
  }
`;
