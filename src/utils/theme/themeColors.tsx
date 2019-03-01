import { themeGet } from 'styled-system'

import { ThemeVariants, ColorEffects } from '../../types/theme'

function themeColors(value: ThemeVariants, effect: ColorEffects = '') {
  return themeGet(`colors.${value}${effect}`)
}

export default themeColors
