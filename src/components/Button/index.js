import { PlayButton } from './Button.styles'
// Context
import { useGlobalContext } from '../../context'

export const Button = () => {
  const { buttonChanged, translateReels } = useGlobalContext()
  console.log('disable?:', buttonChanged)
  return (
    <PlayButton
      defaultValue='press to play!'
      disabled={buttonChanged}
      onClick={translateReels}
    />
  )
}
