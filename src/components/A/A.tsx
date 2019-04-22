import React from 'react'
import styled from 'styled-components'

import { themeColors } from '../../utils/theme'

const AStyled = styled.a`
  color: ${themeColors('primary')};
  font-weight: 600;
  text-decoration: none;
`

interface AProps {
  href?: HTMLAnchorElement['href']
}

// TODO: fix types
const A: React.FC<AProps> = ({ children, ...rest }) => {
  return <AStyled {...rest as any}>{children}</AStyled>
}

export default A
