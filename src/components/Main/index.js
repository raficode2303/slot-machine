// components
import { Wrapper, Reel, SymbolImg } from './Main.styles'
import { Symbols } from '../../helpers'
import { PayLine } from '../PayLine'

// unike key
import { nanoid } from 'nanoid'

// GlobalContext
import { useGlobalContext } from '../../context'
import { useState } from 'react'

console.log(Symbols)
const MAXSPIN = 2400
const REVERSE = -1
const MAXSPIN_REVERSE = MAXSPIN * REVERSE
/* need it??
const reelsStopDistance = MAXSPIN / numberOfreels
const getReelPositionsEnd = (numberOfreels) => {
  let ArrayOfReelPositionsEnd = []
  for (let i = 0; i < numberOfreels - 1; i++) {
    ArrayOfReelPositionsEnd[i] =
    REVERSE * (reelsStopDistance + i * reelsStopDistance)
  }
  ArrayOfReelPositionsEnd.push(MAXSPIN_REVERSE)
  console.log('ArrayOfReelPositionsEnd: ', ArrayOfReelPositionsEnd)
  return ArrayOfReelPositionsEnd
}
*/

export const Main = () => {
  const {
    topPosition,
    reelPosition,
    numberOfreels = 1,
    visibleSymbols = 1,
    visibleSymbolsIds,
  } = useGlobalContext()
  // add visible symbols to the end of symbols
  const [symbolsArray, setSymbolsArray] = useState(() => {
    let symbolsWithAdd = [...Symbols]
    for (let i = 0; i < visibleSymbols; i++) {
      symbolsWithAdd.push(Symbols[i])
    }
    console.log('symbolsWithAdd is:', symbolsWithAdd)
    return symbolsWithAdd
  })

  const numberOfreelsArray = [...Array(numberOfreels).keys()]
  console.log('numberOfReels', numberOfreels)
  console.log('reelPosition at Main: ', reelPosition)
  console.log('%c Main: Reel & Symbols reneders', 'border: solid gold')

  return (
    <>
      <Wrapper className='reels-container'>
        {numberOfreelsArray.map((_reel, index) => (
          <Reel
            className='reel'
            key={nanoid()}
            topPosition={topPosition}
            whenReelStop={-3000 - 200 * visibleSymbolsIds[index]} // **TODO** - get 3000 and 200 from context
          >
            {symbolsArray.map((symbol) => (
              <SymbolImg
                key={nanoid()}
                src={symbol.url}
                data-symbol-number={symbol.id}
              />
            ))}
          </Reel>
        ))}
        <PayLine />
      </Wrapper>
    </>
  )
}
