// start 07/07/2022, 11:35

// - make reels container to adjust for any amount of reels
// make it spin
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

  const RotateReels = () => {
    console.log('enter RotateReelsRotateReels')
    // setImages(shuffleArray(images))
  }

  return (
    <>
      <h2>One-Armed Bandit</h2>

      <GlobalStyle />
      <div className='app'>
        <Header bcgimage={logo} />

        <Main />
      </div>
      <Button RotateReels={RotateReels} />
    </>
  )
}

export default App
