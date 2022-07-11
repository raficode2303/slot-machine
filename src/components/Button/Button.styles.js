import styled from 'styled-components'

export const PlayButton = styled.input`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  color: #fff;
  background-color: red;
  font-size: 1.4rem;
  opacity: 0.5;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    opacity: 1;
    font-weight: bolder;
    text-shadow: 4px 5px purple;
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.2;
    background-color: grey;
  }
`
