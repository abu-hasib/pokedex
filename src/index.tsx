import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
    width: 100%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .grid {
    display: grid;
  }
  .flex {
    display: flex;
    gap: var(--gap, 1rem)
  }
  .container {
    max-width: 80em;
    padding-inline: 2em;
    margin-inline: auto;
  }
  .pointer {
    cursor: pointer
  }
`;
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
