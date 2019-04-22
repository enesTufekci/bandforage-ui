import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../../index'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  > * {
    margin: 16px;
  }
`

storiesOf('Components', module).add('Avatar', () => (
  <Container>
    <Avatar imageUrl="http://i.pravatar.cc/300" size="s" />
    <Avatar imageUrl="http://i.pravatar.cc/300" />
    <Avatar imageUrl="http://i.pravatar.cc/300" size="l" />
  </Container>
))
