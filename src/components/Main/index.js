// components
import { Wrapper, Reel, SymbolImg } from './Main.styles'
import { Symbols } from '../../helpers'

// unike key
import { nanoid } from 'nanoid'

// GlobalContext
import { useGlobalContext } from '../../context'

console.log(Symbols)
const MAXSPIN = 2400
const REVERSE = -1
const MAXSPIN_REVERSE = MAXSPIN * REVERSE

const getReelPositionsEnd = (numberOfreels) => {
  const reelsStopDistance = MAXSPIN / numberOfreels
  let ArrayOfReelPositionsEnd = []
  for (let i = 0; i < numberOfreels - 1; i++) {
    ArrayOfReelPositionsEnd[i] =
      REVERSE * (reelsStopDistance + i * reelsStopDistance)
  }
  ArrayOfReelPositionsEnd.push(MAXSPIN_REVERSE)
  console.log('ArrayOfReelPositionsEnd: ', ArrayOfReelPositionsEnd)
  return ArrayOfReelPositionsEnd
}

export const Main = () => {
  const { reelPosition, numberOfreels = 1 } = useGlobalContext()
  let reelsPositionsEndArray = getReelPositionsEnd(1)
  console.log('numberOfreels is:', numberOfreels)

  // const numberOfreelsArray = [...Array(4).keys()]
  console.log('numberOfReels', numberOfreels)
  console.log('reelPosition at Main: ', reelPosition)
  return (
    <>
      <Wrapper className='reels-container'>
        {reelsPositionsEndArray.map((_reel, index) => (
          <Reel
            className='reel'
            key={nanoid()}
            reelPosition={reelPosition}
            maxPosition={reelsPositionsEndArray[index]}
          >
            {Symbols.map((symbol) => (
              <SymbolImg key={nanoid()} src={symbol} />
            ))}
          </Reel>
        ))}
      </Wrapper>
    </>
  )
}
