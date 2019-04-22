import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Navbar, NavItem, A } from '../../index'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Components', module).add('Navbar', () => (
  <Navbar>
    <NavItem>
      <A href="#">Manifest</A>
    </NavItem>
    <NavItem>
      <A href="#">Sign In</A>
    </NavItem>
    <NavItem>
      <A href="#">Sign Up</A>
    </NavItem>
  </Navbar>
))
