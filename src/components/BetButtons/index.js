import React from 'react'
import { Wrapper, Content } from './BetButtons.styles'

export const BetButtons = ({ buttons }) => {
  return (
    <Wrapper>
      {buttons.map((button) => (
        <Content>{button}</Content>
      ))}
    </Wrapper>
  )
}
