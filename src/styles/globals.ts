import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const Globals = createGlobalStyle`
  @font-face {
    font-family: "Outfit";
    src: url(../../public/fonts/static/Outfit-Light.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Outfit Medium";
    src: url(../../public/fonts/static/Outfit-Medium.ttf) format("truetype");
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: "Outfit", sans-serif;
    color: ${theme.colors.primary_light};
    background-color: ${theme.colors.primary_dark};
    font-size: 15px;
    overflow-x: hidden
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-family: "Outfit Medium", sans-serif;
    font-size: 18px;
  }

  input {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary_light}
  }

  p {
    opacity: .75;
    line-height: 1.5rem;
  }
`;

export default Globals;
