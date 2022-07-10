// start 07/07/2022, 11:35
// 1. make screen of rotate symbols - 50%
// 2. make a button to press to play - V
// 3. make - line at the middle of the second symbol
// show alert when winner
// useContext, useMemo, useReducer, React Router v6
// use carucella 3d??
import React from 'react'

// Logo image
import logo from './images/logo.png'
// components
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Reel } from './components/Reel'

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
        <div className='reels-container'>
          <Reel />
        </div>

        <Button RotateReels={RotateReels} />
      </div>
    </>
  )
}

export default App
