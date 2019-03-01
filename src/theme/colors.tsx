import { darken, lighten } from 'polished'

const main: { [key: string]: string } = {
  primary: '#336B87',
  info: '#336B87',
  secondary: '#763626',
  text: '#2A3132'
}

const darkened = Object.keys(main).reduce((acc, key) => {
  return { ...acc, [`${key}Darkened`]: darken(0.05)(main[key]) }
}, {})

const lightened = Object.keys(main).reduce((acc, key) => {
  return { ...acc, [`${key}Lightened`]: lighten(0.05)(main[key]) }
}, {})

const colors = {
  ...main,
  ...darkened,
  ...lightened
}

export default colors
