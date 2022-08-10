import React from 'react'
import { useGlobalContext } from '../../context'
import { Wrapper, Content } from './BetButtons.styles'

export const BetButtons = ({ buttons }) => {
  const {
    coinsPlayed,
    setCoinsPlayed,
    setWinnerPaid,
    rollReels,
    buttonChanged,
  } = useGlobalContext()
  const handleBet = (buttonName) => {
    // ** TODO - make it with useReducer
    // make buttons disable when reels roll
    switch (buttonName) {
      case 'bet one':
        setCoinsPlayed((perv) => {
          return { ...perv, value: perv.value !== 3 ? perv.value + 1 : 1 }
        })
        break
      case 'bet max':
      case 'spin reels':
        // credits already toke!, else need to take credits!
        if (
          (buttonName === 'spin reels' && coinsPlayed.value) ||
          (buttonName === 'bet max' && coinsPlayed.value === 3)
        ) {
          // roll the reels, ** make SURE that is new turn
          rollReels()
          break
        }
        const betTimer = setInterval(() => {
          setCoinsPlayed((perv) => {
            console.log(perv)
            // debugger
            if (perv.value >= 3) {
              clearInterval(betTimer)
              rollReels()
              return perv
            }
            return {
              ...perv,
              value: perv.value + 1,
            }
          })
        }, 200)

        // run the reels and disable buttons
        // make sure for the next to know that credits need to be minus new bet
        break
      default:
        throw new Error(`there is no such button with the name: ${buttonName}`)
    }
  }

  const handleWin = () => {
    // 1. take the number from winner table
    // 2. add the number to winner paid
    // 3. put winner paid to null when next turn,  after credits is updated
    console.log('you are a winner!')
  }

  return (
    <Wrapper>
      {buttons.map((button) => (
        <Content
          key={button}
          onClick={() => handleBet(button)}
          disabled={buttonChanged}
        >
          {button}
        </Content>
      ))}
    </Wrapper>
  )
}
