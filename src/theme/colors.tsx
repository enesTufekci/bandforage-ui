import { darken, lighten } from 'polished'
import { Colors, MainColors, ColorList } from '../types/theme'

const light: ColorList = {
  primary: '#373737',
  secondary: '#DCD0C0',
  background: '#F4F4F4',
  text: '#444444',
  error: '#F63D3A'
}

const dark: ColorList = {
  secondary: '#373737',
  primary: '#F4F4F4',
  background: '#373737',
  text: '#FFF',
  error: '#F63D3A'
}

export const transformColors = (
  transformFn: typeof darken | typeof lighten,
  colorsToTransform: any,
  amount: string | number
) =>
  Object.keys(colorsToTransform).reduce((acc, color) => {
    return { ...acc, [color]: transformFn(amount)(colorsToTransform[color]) }
  }, colorsToTransform)

const colors: Colors = {
  dark: {
    normal: dark,
    darkened: transformColors(darken, dark, 0.05),
    lightened: transformColors(lighten, dark, 0.05)
  },
  light: {
    normal: light,
    darkened: transformColors(darken, light, 0.05),
    lightened: transformColors(lighten, light, 0.05)
  }
}

export default colors
