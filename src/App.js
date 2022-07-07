// start 07/07/2022, 11:35
// 1. make screen of rotate symbols - 50%
// 2. make a button to press to play - V
// 3. make - line at the middle of the second symbol
// show alert when winner
// useContext, useMemo, useReducer, React Router v6
// use carucella 3d??
import React from 'react'
import { Button } from './components/Button'
import { Slot } from './components/Slot'
import { Logo } from './components/Logo'

// GlobalStyle
import { GlobalStyle } from './GlobalStyles.styles'
// unike key
import { nanoid } from 'nanoid'

// symbols
import { Symbols, shuffleArray } from './helpers'

const Symbols2 = shuffleArray(Symbols)

const rounds = ['symbol1', 'symbol2', 'symbol3']

function App() {
  const [loading, setLoading] = React.useState(true)
  const [images, setImages] = React.useState(Symbols2)

  const changeImages = () => {
    console.log('enter changeimages')
    setImages(shuffleArray(images))
  }

  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <Logo />
        <div className='slots-container'>
          {rounds.map((symbol, index) => (
            <Slot
              key={nanoid()}
              src1={Symbols[Math.floor(Math.random() * Symbols.length)]}
              src2={Symbols[Math.floor(Math.random() * Symbols.length)]}
              src3={Symbols[Math.floor(Math.random() * Symbols.length)]}
            />
          ))}
        </div>

        <Button changeImages={changeImages} />
      </div>
    </>
  )
}

export default App
