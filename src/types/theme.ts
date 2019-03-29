export type MainColors =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'background'
  | 'error'
export type ThemeColors = MainColors
export type ColorModes = 'light' | 'dark'
export type ColorTypes = 'normal' | 'darkened' | 'lightened'
export type ColorList = { [key in MainColors]: string }
export type Colors = { [key in ColorModes]: { [key in ColorTypes]: ColorList } }
export type BaseThemeVariants = 'primary' | 'secondary' | 'info'
export type ButtonVariants = BaseThemeVariants | 'clean'
export type ThemeSize = 'sm' | 'md' | 'lg' | 'xl'
export type ElevationLevel = 0 | 1 | 2
export type SizeMap = { [key in ThemeSize]: number }
