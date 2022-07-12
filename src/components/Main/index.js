import { useContext } from 'react'

// components
import { Wrapper, Reel, SymbolImg } from './Main.styles'
import { Symbols } from '../../helpers'

// unike key
import { nanoid } from 'nanoid'

// Context
import { Context } from '../../App'

console.log(Symbols)

export const Main = () => {
  const { reelPosition, numberOfreels } = useContext(Context)

  const numberOfreelsArray = [...Array(numberOfreels).keys()]
  console.log('numberOfReels', numberOfreels)
  console.log('reelPosition at Main: ', reelPosition)
  return (
    <>
      <Wrapper className='reels-container'>
        {numberOfreelsArray.map((_reel) => (
          <Reel className='reel' key={nanoid()} reelPosition={reelPosition}>
            {Symbols.map((symbol) => (
              <SymbolImg key={nanoid()} src={symbol} />
            ))}
          </Reel>
        ))}
      </Wrapper>
    </>
  )
}
