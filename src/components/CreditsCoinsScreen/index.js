import React from 'react'
import { Wrapper, Content } from './CreditsCoinsScreen.styles'
import { nanoid } from 'nanoid'

export function CreditsCoinsScreen({ screensData }) {
  console.log('screensData at CreditsCoinsScreen: ', screensData)
  return (
    <>
      <Wrapper className='screen'>
        {screensData.map((screen) => (
          <Content key={nanoid()} {...screen}>
            {screen.value}
          </Content>
        ))}
      </Wrapper>
    </>
  )
}
