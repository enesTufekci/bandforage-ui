import * as React from 'react'
import styled from 'styled-components'
import { themeColors, applyElevation } from '../../utils/theme'
import { ElevationLevel } from '../../types/theme'

const PaperStyled = styled.div<{ elevation: ElevationLevel }>`
  background-color: ${themeColors('background')};
  ${applyElevation}
`

interface PaperProps {
  className?: string
  elevation?: ElevationLevel
}

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  elevation = 1
}) => {
  return (
    <PaperStyled elevation={elevation} className={className}>
      {children}
    </PaperStyled>
  )
}

export default Paper
