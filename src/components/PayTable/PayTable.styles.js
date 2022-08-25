import styled from 'styled-components'

export const Table = styled.table`
  background-image: linear-gradient(red, white, blue);
  text-align: center;
  border: 1px solid;
  border-collapse: collapse;
  empty-cells: hide;
  caption-side: bottom;
  font-size: 2.2rem;

  margin: 0 auto;
`

export const Tr = styled.tr`
  border: 1px solid;
`
export const Th = styled.th`
  border: 1px solid;
  padding: 0.5rem;
`
export const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid;
`
