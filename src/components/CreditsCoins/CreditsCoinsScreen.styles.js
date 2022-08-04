import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
  justify-content: center;
  align-items: end;
  background-color: black;
  max-width: 95%;
  min-height: 100px;
  padding: 10px 5px;
`
export const Content = styled.div`
  position: relative;
  justify-self: ${(props) => {
    return props.size ? 'center' : 'auto'
  }};
  width: ${(props) => {
    console.log(props)

    return props.size ? props.size : 'auto'
  }};
  min-width: 50px;
  height: 75%;
  font-size: 3rem;
  text-transform: uppercase;
  color: red;
  background-color: inherit;
  border: 2px solid silver;
  border-radius: 0.5rem;
  text-align: center;

  &:before {
    content: ${(props) => {
      return `'${props.name}'`
    }};
    position: absolute;
    color: silver;
    left: 25%;
    top: -25px;
    white-space: nowrap;
    font-size: initial;
  }
`
