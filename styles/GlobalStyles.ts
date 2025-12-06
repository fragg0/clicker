"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background: #101a42ff;
    color: #ffffffff;
    padding: 20px;
    font-size: 30px;
  }
`;

export default GlobalStyles;
