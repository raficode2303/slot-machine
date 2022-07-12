import { useContext } from 'react'
import { PlayButton } from './Button.styles'
// Context
import { Context } from '../../App'

export const Button = () => {
  const { buttonChanged, translateReels } = useContext(Context)
  console.log('disable?:', buttonChanged)
  return (
    <PlayButton
      defaultValue='press to play!'
      disabled={buttonChanged}
      onClick={translateReels}
    />
  )
}
