import { Wrapper, Content } from './Slot.styles'

export const Slot = ({ src }) => (
  <Wrapper>
    <Content src={src} />
  </Wrapper>
)
