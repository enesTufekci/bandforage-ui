import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Navbar, NavItem, A, DropDownMenu, Button } from '../../index'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Components', module).add('Navbar', () => (
  <Navbar>
    <NavItem>
      <A href="#">Manifest</A>
    </NavItem>
    <NavItem>
      <A href="#">Link</A>
    </NavItem>
    <NavItem>
      <DropDownMenu>
        <DropDownMenu.Anchor>
          <A>Dropdown</A>
        </DropDownMenu.Anchor>
        <DropDownMenu.Items>
          <DropDownMenu.Item>Item 1</DropDownMenu.Item>
          <DropDownMenu.Item>Item 2</DropDownMenu.Item>
          <DropDownMenu.Item>Item 3</DropDownMenu.Item>
        </DropDownMenu.Items>
      </DropDownMenu>
    </NavItem>
  </Navbar>
))
