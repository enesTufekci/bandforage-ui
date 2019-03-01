import { style } from 'styled-system'
import { Elevation } from '../../types/theme'

const applyElevation = style({
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

export default applyElevation
