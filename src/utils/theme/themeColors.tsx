import { themeGet } from 'styled-system'

import { ThemeVariants } from '../../types/theme'

export function themeColors(value: ThemeVariants) {
  return themeGet(`colors.${value}`)
}
