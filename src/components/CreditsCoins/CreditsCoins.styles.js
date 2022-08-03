import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 600px;
  height: 100px;
  padding: 0 5px;
`
export const Content = styled.div`
  height: 90%;
  text-transform: uppercase;
  color: red;
  background-color: inherit;
  border: 2px solid silver;
  text-align: center;
`
