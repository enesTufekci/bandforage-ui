import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import is from 'typescript-styled-is'

import { themeColors, applyElevation } from '../../utils/theme'

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

export const Items = styled.ul`
  ${applyElevation};
  position: absolute;
  z-index: 1;
  display: none;
  list-style: none;
  margin-top: ${themeGet('space.1')};
  padding: 0;
  right: 0;
  ${is('isOpen')`
    display: block;
  `};
  border: 2px solid ${themeColors('primary')};
  border-radius: 5px;
  background-color: ${themeColors('background')};
  width: max-content;
`

Items.displayName = 'DropDownMenuItems'

const ItemWrapper = styled.li`
  min-width: max-content;
  color: ${themeColors('text')};
  transition: 200ms;
  padding: ${themeGet('space.2')};
  cursor: pointer;
  &:hover {
    background-color: ${themeColors('background', 'darkened')};
  }
  > :first-child {
    min-width: 125px;
    max-width: 225px;
  }
`

export const Item: React.FC = ({ children, ...rest }) => (
  <ItemWrapper {...rest}>
    <div>{children}</div>
  </ItemWrapper>
)

export const Divider = styled.li``

export const Anchor = styled.div``

Anchor.displayName = 'DropDownMenuAnchor'

export interface DropDownMenuProps {}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const [anchorTop, setAnchorTop] = React.useState(0)
  const [anchorLeft, setAnchorLeft] = React.useState(0)

  const handleToggle = () => {
    setOpen(!open)
  }
  const _children = React.Children.map(children, child => {
    if (child && (child as any).type.displayName === 'DropDownMenuAnchor') {
      return {
        ...(child as any),
        props: {
          ...(child as any).props,
          onClick: handleToggle
        }
      }
    }
    if (child && (child as any).type.displayName === 'DropDownMenuItems') {
      return {
        ...(child as any),
        props: {
          ...(child as any).props,
          isOpen: open,
          elevation: 1
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

export default DropDownMenu
