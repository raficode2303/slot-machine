import styled from 'styled-components'

export const LogoBackgImage = styled.header`
  height: 445px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  position: relative;
  animation: introFlashAnimate 1s,
    startLightAnimate 1s linear 10000ms infinite alternate;

  :hover {
    background-color: gold;
    opacity: 0.75;
  }

  @keyframes introFlashAnimate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes startLightAnimate {
    0% {
      filter: blur(1px);
    }
    100% {
      filter: blur(0px);
    }
  }
`
