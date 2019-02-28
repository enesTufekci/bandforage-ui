import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../index'

storiesOf('Button', module).add('primary', () => (
  <Button type="primary">Hello Button</Button>
))
