// how to import image dymianclly

import React from 'react'
import { Wrapper, Content } from '../Logo/Logo.styles'

import logo from '../../images/pngwing.com (711).png'

export const Logo = () => {
  return (
    <Wrapper>
      <Content src={logo} />
    </Wrapper>
  )
}
