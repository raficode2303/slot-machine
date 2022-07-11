import React from 'react'
import { PlayButton } from './Button.styles'

export const Button = ({ translateReels, disable }) => {
  console.log('disable:', disable)
  return (
    <PlayButton
      defaultValue='press to play!'
      disabled={disable}
      onClick={translateReels}
    />
  )
}
