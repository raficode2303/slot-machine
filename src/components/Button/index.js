import React from 'react'
import { Wrapper, Content } from './Button.styles'

export const Button = ({ changeImages }) => {
  return (
    <Wrapper onClick={changeImages}>
      <Content>press to play!</Content>
    </Wrapper>
  )
}
