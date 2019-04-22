import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import is from 'typescript-styled-is'

import { themeColors } from '../../utils/theme'

const Container = styled.div`
  position: relative;
`

const ClickAway = styled.div<{ show: boolean }>`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 0;
  display: none;
  ${is('show')`
    display: unset;
  `};
`

const Items = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  display: none;
  list-style: none;
  margin-top: ${themeGet('space.1')};
  padding: 0;
  min-width: 128px;
  right: 0;
  ${is('isOpen')`
    display: block;
  `};
  border: 2px solid ${themeColors('primary')};
  border-radius: 5px;
  background-color: ${themeColors('background')};
`

Items.displayName = 'DropDownMenuItems'

const Item = styled.li`
  min-width: 100px;
  padding: ${themeGet('space.2')};
  color: ${themeColors('text')};
`

const Divider = styled.li``

const Anchor = styled.div``

Anchor.displayName = 'DropDownMenuAnchor'

export interface DropDownMenuProps {}

const DropDownMenu: React.FC<DropDownMenuProps> & {
  Items: React.FC
  Item: React.FC
  Divider: React.FC
  Anchor: React.FC
} = ({ children, anchorEl }) => {
  const [open, setOpen] = React.useState(false)
  const [anchorTop, setAnchorTop] = React.useState(0)
  const [anchorLeft, setAnchorLeft] = React.useState(0)

  const handleToggle = () => {
    setOpen(!open)
  }
  const _children = React.Children.map(children, child => {
    if (child.type.displayName === 'DropDownMenuAnchor') {
      return {
        ...child,
        props: {
          ...child.props,
          onClick: handleToggle
        }
      }
    }
    if (child.type.displayName === 'DropDownMenuItems') {
      return {
        ...child,
        props: {
          ...child.props,
          isOpen: open
        }
      }
    }
  })

  return (
    <Container>
      <ClickAway show={open} onClick={handleToggle} />
      {_children}
    </Container>
  )
}

DropDownMenu.Item = Item
DropDownMenu.Items = Items
DropDownMenu.Divider = Divider
DropDownMenu.Anchor = Anchor

export default DropDownMenu
