import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Logo } from '../index'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Logo', module).add('basic', () => <Logo />)
