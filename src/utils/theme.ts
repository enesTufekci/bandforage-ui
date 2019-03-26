import { style, themeGet } from 'styled-system'
import {
  ThemeSize,
  ColorTypes,
  SizeMap,
  ThemeColors,
  ElevationLevel
} from '../types/theme'

export function themeColors(color: ThemeColors, effect: ColorTypes = 'normal') {
  return themeGet(`colors.${effect}.${color}`)
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
  transformValue: (elevation: ElevationLevel) => {
    if (elevation === 1) {
      return '0 3px 6px 0px rgba(0, 0, 0, 0.24)'
    }
    if (elevation === 2) {
      return '0 3px 6px 0px rgba(0, 0, 0, 0.24)'
    }
    return 'none'
  }
})

export function convertHex(hex: string, opacity: number = 1) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
