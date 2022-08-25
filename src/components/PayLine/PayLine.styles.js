import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  border: 2px solid black;
  width: 100%;
  height: 15px;
  /* need to calc the exact middle */
  top: 50%;
`
export const Content = styled.div`
  /* position: relative; */
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 0, 0, 0.67);
  line-height: 50%;
  /* need to make payline to escape from overflow: hideen of main index */
  ::before {
    content: 'payline';
    position: relative;
    font-size: 2.2rem;
    text-transform: capitalize;
    color: pink;
  }
`
