// start 07/07/2022, 11:35
// 1. make screen of rotate symbols
// 2. make a button to press to play
// useContext, useMemo, useReducer, React Router v6
// use carucella 3d??
import React from 'react'
import { Button } from './components/Button'
import { Slot } from './components/Slot'
import { Logo } from './components/Logo'

// GlobalStyle
import { createGlobalStyle } from 'styled-components'
// unike key
import { nanoid } from 'nanoid'

// symbols
import symbol1 from './images/pngwing.com (1).png'
import symbol2 from './images/pngwing.com (2).png'
import symbol3 from './images/pngwing.com (3).png'
import symbol4 from './images/pngwing.com (4).png'
import symbol5 from './images/pngwing.com (5).png'
import symbol6 from './images/pngwing.com (6).png'
import symbol7 from './images/pngwing.com (7).png'
import symbol8 from './images/pngwing.com (8).png'
import symbol9 from './images/pngwing.com (9).png'
import symbol10 from './images/pngwing.com (10).png'
import symbol11 from './images/pngwing.com (11).png'
import symbol12 from './images/pngwing.com (12).png'
import symbol13 from './images/pngwing.com (13).png'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  .slots-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2px;
  }
`

const Symbols = [
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  symbol6,
  symbol7,
  symbol8,
  symbol9,
  symbol10,
  symbol11,
  symbol12,
  symbol13,
]

function shuffleArray(array) {
  let newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  console.log('return new array:', newArray)
  return newArray
}

const Symbols2 = shuffleArray(Symbols)
function App() {
  const [images, setImages] = React.useState(Symbols2)

  React.useEffect(() => {
    console.log('entered useEffect')
  }, [images])

  const changeImages = () => {
    console.log('enter changeimages')
    setImages(shuffleArray(images))
  }
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <div className='slots-container'>
        {images.map((symbol, index) => (
          <Slot key={symbol} src={symbol} />
        ))}
      </div>

      <Button changeImages={changeImages} />
    </div>
  )
}

export default App
