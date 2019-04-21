import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { Button } from '../index'
import StoryWrapper from '../components/utils/storybook'

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`

storiesOf('Button', module).add('variants', () => (
  <React.Fragment>
    <StoryWrapper>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="info">Info</Button>
      <Button variant="clean">Clean</Button>
    </StoryWrapper>
  </React.Fragment>
))
