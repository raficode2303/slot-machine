import React from 'react'
import { Wrapper, Content } from './CreditsCoinsScreen.styles'
import { nanoid } from 'nanoid'

function CreditsCoinsScreen({ screensData }) {
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

export default CreditsCoinsScreen
