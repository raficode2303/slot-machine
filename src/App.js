// start 07/07/2022, 11:35
// == TODO TODAY ==
// - all reels need to stop spin at diffrent times
// - show winner alert

// add screen and buttons

// === TODO NEXT ==
// - make - line at the middle of the second symbol
// add dashboard
// add all sounds
// - show alert when winner
// useContext, useMemo, useReducer, React Router v6
// FTA=FirstTryAlone!: use carucella 3d?? slider-setup: ?? https://youtu.be/a_7Z7C_JCyo?t=19579
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
import { useGlobalContext } from './Context'

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
      if (Math.abs(reelPosition) < 2400) setReelPosition((prev) => prev - 50)
      else {
        clearInterval(reelsSpinInterval)
        setButtonChanged(false)
        setReelPosition(0)
      }

      console.log(
        'Math.abs(reelPosition), timesTorun: ',
        Math.abs(reelPosition)
      )
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
