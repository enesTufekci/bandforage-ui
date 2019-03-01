import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import colors from './colors'

export const theme = {
  colors,
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '3rem',
    '4rem'
  ],
  space: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem']
}

const ThemeProvider: React.FC<{ themeOverrides: any }> = ({
  children,
  themeOverrides
}) => (
  <StyledThemeProvider theme={{ ...theme, ...(themeOverrides as any) }}>
    {children as any}
  </StyledThemeProvider>
)

export default ThemeProvider
