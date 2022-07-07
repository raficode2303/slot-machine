import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  .app {
    max-width: 800px;
    background-color: yellow;
    outline: 10px solid red;
    margin: 0 auto;
  }
  .slots-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 300px));
    grid-template-rows: 25% 50% 25%;
    gap: 2px;


  }
`