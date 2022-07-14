// start 07/07/2022, 11:35
// == TODO TODAY ==
// - add payline at the middle
// - show winner alert
//
// - add dashboard - screen of needed buttons

// TOFIX: WHY the reels spin time is different depence on the amount AND NOT FIXED?

// === TODO NEXT ==
// add all sounds
// useMemo, useReducer, React Router v6, useNavigate
// FTA=FirstTryAlone!: use carucella 3d??, felx-reverse??, slider-setup App: ?? https://youtu.be/a_7Z7C_JCyo?t=19579
// make reels curve

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
      <div className='app'>
        <Header bcgimage={logo} />
        <Main />
      </div>
      <Button />
      <h2>One-Armed Bandit</h2>
    </>
  )
}

export default App
