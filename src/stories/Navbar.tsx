import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Navbar } from '../index'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Components', module).add('Navbar', () => <Navbar />)
