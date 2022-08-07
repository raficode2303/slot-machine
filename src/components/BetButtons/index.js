import React from 'react'
import { Wrapper, Content } from './BetButtons.styles'

export const BetButtons = ({ buttons, screensData, setScreensData }) => {
  const handleBet = (buttonName) => {
    let screenConnect
    switch (buttonName) {
      case 'bet one':
        screenConnect = 'coins played'

        break
      case 'bet max':
        screenConnect = 'coins played'
        break
      case 'spin reels':
        screenConnect = 'coins played'
        break
      default:
        throw new Error(`there no such button ${buttonName}`)
        break
    }
    const newScreenData = screensData.map((screen) => {
      return {
        ...screen,
        value: screen.name === screenConnect ? screen.value + 1 : screen.value,
      }
    })
    setScreensData(newScreenData)
  }

  return (
    <Wrapper>
      {buttons.map((button) => (
        <Content key={button} onClick={() => handleBet(button)}>
          {button}
        </Content>
      ))}
    </Wrapper>
  )
}
