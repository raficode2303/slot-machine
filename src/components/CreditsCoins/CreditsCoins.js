import React from 'react'
import { Wrapper, Content } from './CreditsCoins.styles'
import { nanoid } from 'nanoid'

const screensAmount = [...Array(3 + 1).keys()].slice(1)
function CreditsCoins() {
  return (
    <>
      <Wrapper>
        {screensAmount.map((screenID) => (
          <Content key={nanoid()}>{screenID}</Content>
        ))}
      </Wrapper>
    </>
  )
}

export default CreditsCoins
