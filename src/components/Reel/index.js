import { Wrapper, Content } from './Reel.styles'
import { Symbols } from '../../helpers'

// unike key
import { nanoid } from 'nanoid'

console.log(Symbols)

export const Reel = () => (
  <>
    <Wrapper>
      {Symbols.map((symbol) => (
        <Content key={nanoid()} src={symbol} />
      ))}
    </Wrapper>
  </>
)
