import React from 'react'
import { Wrapper, Content } from './CreditsCoinsScreen.styles'
import { nanoid } from 'nanoid'
// ** TOOD - make screen font look like sport screen like casio watch, maybe Orbitron font, with squares
export const CreditsCoinsScreen = React.memo(({ screensData }) => {
  console.log('screensData at CreditsCoinsScreen: ', screensData)
  console.log('%c CreditsScreen reneders', 'border: solid green')

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
})
