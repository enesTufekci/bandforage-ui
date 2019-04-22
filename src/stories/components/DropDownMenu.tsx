import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { DropDownMenu, Button } from '../../index'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;s
`

storiesOf('Components', module).add('DropDownMenu', () => (
  <Container>
    <DropDownMenu>
      <DropDownMenu.Anchor>
        <Button>Click Me</Button>
      </DropDownMenu.Anchor>
      <DropDownMenu.Items>
        <DropDownMenu.Item>Item 1</DropDownMenu.Item>
        <DropDownMenu.Item>Item 2</DropDownMenu.Item>
        <DropDownMenu.Item>Item 3</DropDownMenu.Item>
      </DropDownMenu.Items>
    </DropDownMenu>
  </Container>
))
