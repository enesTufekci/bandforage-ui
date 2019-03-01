import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../index'

storiesOf('Button', module)
  .add('primary', () => <Button elevation={1}>Submit</Button>)
  .add('secondary', () => <Button variant="secondary">Cancel</Button>)
  .add('info', () => <Button variant="info">Info</Button>)
