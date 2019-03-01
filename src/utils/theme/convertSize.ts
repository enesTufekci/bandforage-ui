import { ThemeSize } from '../../types/theme'

type SizeMap = { [key in ThemeSize]: number }

const sizeMap: SizeMap = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
}

export default function convertSize(size: ThemeSize, multiplier: number = 1) {
  return sizeMap[size] * multiplier
}
