import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 445px;
  max-width: 100%;
  margin-top: 6%;

  background-color: silver;
`

export const Content = styled.img`
  width: 100%;
  max-width: 856px;
  transform: scale(1.4);
  margin: 3% 12%;
  /* animation: circle 5s linear 2s infinite alternate; */

  :hover {
    opacity: 0.7;
  }

  @keyframes circle {
    0% {
      margin: 0;
      filter: blur(0);
    }
    50% {
      margin: 0 auto;
      filter: blur(4px);
    }
    75% {
      margin: auto 0;
      filter: blur(6px);
    }
    100% {
      margin: 0;
      filter: blur(8px);
    }
  }
`
