import { Wrapper, Content } from './Slot.styles'

export const Slot = ({ src1, src2, src3 }) => (
  <>
    <Wrapper>
      <Content src={src1} />
    </Wrapper>
    <Wrapper>
      <Content src={src2} />
    </Wrapper>
    <Wrapper>
      <Content src={src3} />
    </Wrapper>
  </>
)
