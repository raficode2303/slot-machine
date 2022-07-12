// how to import image dymianclly??? - require.context$

import React from 'react'
import { LogoBackgImage } from './Header.styles'

export const Header = ({ bcgimage }) => {
  console.log('bcgimage:', bcgimage)
  return <LogoBackgImage image={bcgimage}></LogoBackgImage>
}
