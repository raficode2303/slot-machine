import React from 'react'
import { Wrapper, Content } from './Button.styles'

export const Button = ({ translateReels }) => {
  return (
    <Wrapper onClick={translateReels}>
      <Content>press to play!</Content>
    </Wrapper>
  )
}
