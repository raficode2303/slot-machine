import React from 'react'
import { Table, Tr, Th, Td } from './PayTable.styles'

const payTableArray = [
  {
    comb: '7 7 7',
    prize: 40000,
  },
  {
    comb: '🪙 🪙 🪙',
    prize: 4000,
  },
  {
    comb: 'same same same',
    prize: 400,
  },
  {
    comb: 'any two 🍒',
    prize: 40,
  },
  {
    comb: 'any one 🍒',
    prize: 4,
  },
]

export const PayTable = () => {
  return (
    <Table>
      <Tr>
        <Th></Th>
        <Th>1st</Th>
        <Th>2nd</Th>
        <Th>3rd</Th>
        <Th></Th>
      </Tr>
      {payTableArray.map((payLine) => (
        <Tr key={payLine.comb}>
          <Td>{payLine.comb}</Td>
          <Td>{payLine.prize}</Td>
          <Td>{payLine.prize * 2}</Td>
          <Td>{payLine.prize * 5}</Td>
          <Td>{payLine.comb}</Td>
        </Tr>
      ))}
    </Table>
  )
}
