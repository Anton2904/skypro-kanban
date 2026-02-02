import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  button {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }

  ul li {
    list-style: none;
  }
`;
