import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const { regular, medium, semiBold, bold } = fonts;

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  src: url(${regular}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url(${medium}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url(${semiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url(${bold}) format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
    --white: #FBFBFB;
    --green: #54be96;
    --bright-green: #38cd3e;
    --dark-green:  #36a379;
    --black: #191a15;
    --yellow: #ffc531;
    --grey: #8a8a89;
    
    --green-transp: rgba(84, 190, 150, 0.2);
    --grey-transp-03: rgba(25, 26, 21, 0.3);
    --grey-transp-01: rgba(25, 26, 21, 0.1);
    --text-grey: rgba(25, 26, 21, 0.5);


 --border-transp-01: 1px solid rgba(25, 26, 21, 0.1);
    --border-transp-02: 1px solid rgba(25, 26, 21, 0.2);
  }

body {
  margin: 0;
  font-family:  "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--gold-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.3s;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0.1px;
}

::-webkit-scrollbar {
  scrollbar-width: thin; 
}

input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`;
