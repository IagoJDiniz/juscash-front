import { createGlobalStyle } from "styled-components";

import { mainColors } from "@utils/colors";

import InterRegular from "@assets/fonts/Inter18pt-Regular.woff2";
import InterBold from "@assets/fonts/Inter18pt-Bold.woff2";
import InterSemiBold from "@assets/fonts/Inter18pt-SemiBold.woff2";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}
@font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display:swap;
  }

  @font-face {
      font-family: 'Inter';
      src: url(${InterBold}) format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display:swap;
  }
  @font-face {
      font-family: 'Inter';
      src: url(${InterSemiBold}) format('woff2');
      font-weight: 600;
      font-style: normal;
      font-display:swap;
  }
  body {
  max-width: 100vw;
  font-family: 'Inter';
  background-color:"#fcfdff";
}

textarea:focus, input:focus{
    outline: none;
}

a {
  color: ${mainColors.secondary};
  text-decoration: underline;
  font-size:14px;
  text-align:center;
}



`;

export default GlobalStyle;
