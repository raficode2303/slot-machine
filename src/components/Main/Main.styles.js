import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: green;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));

  height: 600px;
  gap: 1px;
  overflow: hidden;
`

export const Reel = styled.div`
  /* height: 200px; */
  border: 4px solid #333;
  background-color: rgb(110 114 117);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(
    ${({ reelPosition, maxPosition }) => {
      console.log('maxPosition: ', maxPosition)
      console.log('reelPosition: ', reelPosition)
      return maxPosition < reelPosition
        ? reelPosition + 'px'
        : maxPosition + 'px'
    }}
  );
  /* overflow: hidden; */
  /* z-index: 999; */
`

export const SymbolImg = styled.img`
  /* display: block; */
  padding: 10px;
  max-width: 100%;
  /* width: 33%; */
  height: 200px;
  /* @media screen and (max-width: 500px) {
    width: 150px;
  } */
`
