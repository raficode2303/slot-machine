import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: green;
`

export const Content = styled.img`
  width: 100%;
  height: 100%;
  background-color: #333;
`

export const SymbolImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`
