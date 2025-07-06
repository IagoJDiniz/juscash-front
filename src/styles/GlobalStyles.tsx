import { createGlobalStyle } from "styled-components";

import { mainColors } from "@utils/colors";

import InterRegular from "@assets/fonts/Inter_18pt-Regular.ttf";
import InterBold from "@assets/fonts/Inter_18pt-Bold.ttf";
import InterSemiBold from "@assets/fonts/Inter_18pt-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
@font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
      font-family: 'Inter';
      src: url(${InterBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: 'Inter';
      src: url(${InterSemiBold}) format('truetype');
      font-weight: 600;
      font-style: normal;
  }
  body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Inter';
  background-color:"#fcfdff";
}

textarea:focus, input:focus{
    outline: none;
}

a {
  color: ${mainColors.primary};
  text-decoration: underline;
}



`;

export default GlobalStyle;
