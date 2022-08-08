// start 07/07/2022, 11:35
// == TODO TODAY ==
// - make buttons to effect screens correctly - DONE.
// need to make screen to know if the value is after updating credits or before
// need to disable button after bet
// need to update winner paid when win

// == TODO NEXT ==
// - add payline at the middle
// - show winner options table
// - show winner alert
// - create the logic for winners/losers options
// -- make 'spin reels' button Neon
// add joystick for 'spin reels'
// add sounds

// TOFIX: WHY the reels spin time is different depence on the amount AND NOT FIXED?
// MAIN-CHALLENGE: make smooth slot machine with the same speed and different stop times

// === TODO NEXT ==
// add all sounds
// useMemo, useReducer, React Router v6, useNavigate
// FTA=FirstTryAlone!: flex-reverse??, use carucella 3d??.
// make reels curve
// merge reels amount select and visible Symbols option from carousel/slider branch

import { useEffect, useState } from 'react'

// Logo image
import logo from './images/logo.png'
// Style
import { GlobalStyle } from './GlobalStyles.styles'
// Context
import { useGlobalContext } from './context'
// components
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Main } from './components/Main'

import { CreditsCoinsScreen } from './components/CreditsCoinsScreen'
import { BetButtons } from './components/BetButtons'

// const
const MAXSPIN = 2400
const buttons = ['bet one', 'bet max', 'spin reels']

function App() {
  const {
    reelPosition,
    buttonChanged,
    coinsPlayed,
    screensData,
    setReelPosition,
    setButtonChanged,
  } = useGlobalContext()
  console.log('reelPosition: ', reelPosition)

  useEffect(() => {
    console.log('reelPosition at useEffect: ', reelPosition)
    if ((reelPosition === 0 && !buttonChanged) || !buttonChanged) {
      return
    }

    const reelsSpinInterval = setInterval(() => {
      if (Math.abs(reelPosition) < MAXSPIN) setReelPosition((prev) => prev - 50)
      else {
        clearInterval(reelsSpinInterval)
        setButtonChanged(false)
      }
    }, 10)
    return () => clearInterval(reelsSpinInterval)
  }, [buttonChanged, reelPosition])

  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <Header bcgimage={logo} />
        {/* <Main /> */}
        <CreditsCoinsScreen screensData={screensData} />
        <BetButtons buttons={buttons} />
      </div>
      <Button />
      <h2>One-Armed Bandit</h2>
    </>
  )
}

export default App
