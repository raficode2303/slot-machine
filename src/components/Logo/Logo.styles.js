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
  animation: light 1.5s linear 2s infinite alternate;

  :hover {
    opacity: 0.5;
  }

  @keyframes light {
    0% {
      filter: blur(1px);
    }
    100% {
      filter: blur(0px);
    }
  }
`
