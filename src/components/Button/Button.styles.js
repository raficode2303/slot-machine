import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  background-color: purple;
  padding: 2px;
`
export const Content = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  color: #fff;
  background-color: red;
  font-size: 1.4rem;
  opacity: 0.5;
  text-transform: uppercase;
  :hover {
    opacity: 1;
    font-weight: bolder;
    text-shadow: 4px 5px purple;
  }
`
