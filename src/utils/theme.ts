import { style, themeGet } from 'styled-system'
import {
  Elevation,
  ThemeSize,
  ColorEffects,
  SizeMap,
  ButtonVariants,
  BaseThemeVariants
} from '../types/theme'

export function themeColors(
  value: BaseThemeVariants & ButtonVariants,
  effect: ColorEffects = ''
) {
  return themeGet(`colors.${value}${effect}`)
}

const sizeMap: SizeMap = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
}

export function convertSize(size: ThemeSize, multiplier: number = 1) {
  return sizeMap[size] * multiplier
}

export const applyElevation = style({
  prop: 'elevation',
  cssProperty: 'box-shadow',
  transformValue: (elevation: Elevation) => {
    if (elevation === 0) {
      return 'none'
    }
    if (elevation === 1) {
      return '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);'
    }
    return '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);'
  }
})

export function convertHex(hex: string, opacity: number = 1) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
