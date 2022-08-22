import React, { memo } from 'react'
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

const PayTable = () => {
  console.log('%c PayTabele reneders', 'border: solid green')
  return (
    <Table>
      <caption>Pay Table</caption>
      <thead>
        <Tr>
          <Th></Th>
          <Th>1st</Th>
          <Th>2nd</Th>
          <Th>3rd</Th>
          <Th></Th>
        </Tr>
      </thead>
      {payTableArray.map((payLine) => (
        <tbody key={payLine.comb}>
          <Tr>
            <Td>{payLine.comb}</Td>
            <Td>{payLine.prize}</Td>
            <Td>{payLine.prize * 2}</Td>
            <Td>{payLine.prize * 5}</Td>
            <Td>{payLine.comb}</Td>
          </Tr>
        </tbody>
      ))}
    </Table>
  )
}

export default memo(PayTable)
