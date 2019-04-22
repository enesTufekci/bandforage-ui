import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { A } from '../../index'

storiesOf('Components', module).add('Link', () => (
  <A href="#">
    <span>Sign In</span>
  </A>
))
