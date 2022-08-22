// how to import image dymianclly??? - require.context$

import React, { memo } from 'react'
import { LogoBackgImage } from './Header.styles'

export const Header = memo(({ bcgimage }) => {
  console.log('bcgimage:', bcgimage)
  console.log('%c Header reneders', 'border: solid purple')

  return <LogoBackgImage image={bcgimage}></LogoBackgImage>
})
