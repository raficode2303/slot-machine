import { Wrapper, Reel, SymbolImg } from './Main.styles'
import { Symbols } from '../../helpers'

// unike key
import { nanoid } from 'nanoid'

console.log(Symbols)

export const Main = () => (
  <>
    <Wrapper className='reels-container'>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
      <Reel className='reel'>
        {Symbols.map((symbol) => (
          <SymbolImg src={symbol} />
        ))}
      </Reel>
    </Wrapper>
  </>
)
