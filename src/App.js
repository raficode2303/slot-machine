// start 07/07/2022, 11:35

// - make - line at the middle of the second symbol
// add dashboard
// add music

// - show alert when winner
// useContext, useMemo, useReducer, React Router v6

// use carucella 3d??
// make reels curve

import React from 'react'

// Logo image
import logo from './images/logo.png'
// components
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Main } from './components/Main'

// GlobalStyle
import { GlobalStyle } from './GlobalStyles.styles'

const rounds = ['symbol1', 'symbol2', 'symbol3']

function App() {
  const [loading, setLoading] = React.useState(true)
  const [numberOfreels, setNumberOfreels] = React.useState(3)
  const [buttonChanged, setButtonChanged] = React.useState(false)
  const [reelPosition, setReelPosition] = React.useState(() => 0)
  const [timesTorun, setTimesTorun] = React.useState(() => 100)

  React.useEffect(() => {
    console.log('reelPosition at useEffect: ', reelPosition)
    if ((reelPosition === 0 && !buttonChanged) || !buttonChanged) return

    const reelsSpinInterval = setInterval(() => {
      if (Math.abs(reelPosition) < 2400) setReelPosition((prev) => prev - 50)
      else {
        clearInterval(reelsSpinInterval)
        setButtonChanged(false)
        setReelPosition(0)
      }

      console.log(
        'Math.abs(reelPosition), timesTorun: ',
        Math.abs(reelPosition),
        timesTorun
      )
    }, 10)
    return () => clearInterval(reelsSpinInterval)
  }, [buttonChanged, reelPosition])

  const translateReels = () => {
    console.log('enter RotateReelsRotateReels')
    setButtonChanged(true)
  }
  console.log('reelPosition: ', reelPosition)
  return (
    <>
      <h2>One-Armed Bandit</h2>

      <GlobalStyle />
      <div className='app'>
        <Header bcgimage={logo} />

        <Main numberOfreels={numberOfreels} reelPosition={reelPosition} />
      </div>
      <Button translateReels={translateReels} disable={buttonChanged} />
    </>
  )
}

export default App
