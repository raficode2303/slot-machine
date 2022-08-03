// start 07/07/2022, 11:35
// == TODO TODAY ==
// - add payline at the middle
// - add dashboard - screen of needed buttons

// == TODO NEXT ==
// - create CteditsCoins component
// - create BetButtons component
// - show winner options table
// - create the logic for winners/losers options
// - show winner alert

// TOFIX: WHY the reels spin time is different depence on the amount AND NOT FIXED?
// MAIN-CHALLENGE: make smooth slot machine with the same speed and different stop times

// === TODO NEXT ==
// add all sounds
// useMemo, useReducer, React Router v6, useNavigate
// FTA=FirstTryAlone!: flex-reverse??, use carucella 3d??.
// make reels curve
// merge reels amount select and visible Symbols option from carousel/slider branch

import { useEffect } from 'react'

// Logo image
import logo from './images/logo.png'
// components
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Main } from './components/Main'

// Style
import { GlobalStyle } from './GlobalStyles.styles'

// Context
import { useGlobalContext } from './context'
import CreditsCoins from './components/CreditsCoins/CreditsCoins'

const MAXSPIN = 2400

function App() {
  const { reelPosition, buttonChanged, setReelPosition, setButtonChanged } =
    useGlobalContext()
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

      console.log('Math.abs(reelPosition): ', Math.abs(reelPosition))
    }, 10)
    return () => clearInterval(reelsSpinInterval)
  }, [buttonChanged, reelPosition])

  console.log('reelPosition: ', reelPosition)
  return (
    <>
      <GlobalStyle />
      {/* <div className='app'> */}
      {/* <Header bcgimage={logo} /> */}
      {/* <Main /> */}
      {/* </div> */}
      {/* <Button /> */}
      <CreditsCoins />
      <h2>One-Armed Bandit</h2>
    </>
  )
}

export default App
