import React from 'react'
import styled from 'styled-components'

import { themeColors } from '../../utils/theme'

const LogoContainer = styled.div`
  color: ${themeColors('primary')};
  font-size: 32px;
  font-weight: bold;
`

function Logo() {
  return <LogoContainer>Bandforage</LogoContainer>
}

export default Logo
