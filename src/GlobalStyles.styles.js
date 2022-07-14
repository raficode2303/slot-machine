import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --darkGrey: #1c1c1c;
    --maxWidth: 1280px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    user-select: none;
  }

  h2{text-align: center;}

  .app {
    max-width: 800px;
    outline: 10px solid red;
    margin: 0 auto;
  }
`
