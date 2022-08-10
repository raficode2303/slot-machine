import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.75);
`
const Content = styled.button`
  background-color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  border: 10px outset green;
  border-radius: 0.2rem;
  font-size: 3rem;
  width: 7.7ch;
  text-align: center;
  :hover {
    background-color: rgba(255, 255, 0, 0.9);
  }
  :active {
    border-style: inset;
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: grey;
  }
`

export { Wrapper, Content }
