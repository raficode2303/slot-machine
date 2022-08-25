// start 07/07/2022, 11:35
// == TODO TODAY ==
// carousel-vertical - works, with random symbol stops, need to make it to stop at different time and(delay)different symbols also need to change direction of the roll from top to down
// need to make screen to know if the value is after updating credits or before
// - add payline at the middle
// - show winner alert
// - create the logic for winners/losers options

// not map over Symbols for every Reel
// applay useMemo so symbols not reload everytime bet changed

// == TODO NEXT ==
// pages: best winners/players page, rare of combination, how many times combination was...
// add all sounds and volume controll symbol
// useMemo, useReducer, React Router v6, useNavigate

// === TODO EXTRA ==
// add joystick for 'spin reels'
// -- make 'spin reels' button Neon
// multi slots and symbols
// filter: invert(360%) toggle button

// FTA=FirstTryAlone!: flex-reverse??, use carucella 3d??.
// make reels curve
// merge reels amount select and visible Symbols option from carousel/slider branch

import { useEffect, useState, memo } from 'react'

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
import PayTable from './components/PayTable'

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
    topPosition,
    setTopPosition,
  } = useGlobalContext()
  console.log('reelPosition: ', reelPosition)

  useEffect(() => {
    if ((reelPosition === 0 && !buttonChanged) || !buttonChanged) {
      return
    }
    const reelsSpinInterval = setInterval(() => {
      console.log('reelPosition at useEffect: ', reelPosition)
      console.log('topPosition at useEffect: ', topPosition)
      if (reelPosition !== topPosition) setTopPosition((prev) => prev - 100)
      else {
        clearInterval(reelsSpinInterval)
        setButtonChanged(false)
      }
    }, 10)
    return () => clearInterval(reelsSpinInterval)
  }, [buttonChanged, reelPosition, topPosition])

  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <Header bcgimage={logo} />
        <Main />
        <CreditsCoinsScreen screensData={screensData} />
        <BetButtons buttons={buttons} />
      </div>
      <h2>One-Armed Bandit</h2>
      <PayTable />
    </>
  )
}

export default App
