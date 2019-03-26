import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import colors from './colors'
import { ColorModes } from '../types/theme'

export interface Theme {
  mode: ColorModes
  [key: string]: any
}

export const theme = (mode: ColorModes): Theme => ({
  mode,
  colors: colors[mode],
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
  space: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],
  boxShadow: ['0 3px 6px 0px rgba(0, 0, 0, 0.16)']
})

const ThemeProvider: React.FC<{ themeOverrides: any; mode: ColorModes }> = ({
  children,
  themeOverrides,
  mode
}) => {
  console.log(mode)
  return (
    <StyledThemeProvider theme={{ ...theme(mode), ...(themeOverrides as any) }}>
      {children as any}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
