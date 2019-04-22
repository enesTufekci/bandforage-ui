import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { themeGet } from 'styled-system'
import A from '../A'

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 84px;
`

const NavbarLogoContainer = styled.div``

const NavItemsContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
`

export const NavItem = styled.div`
  padding: 0 ${themeGet('space.3')};
`

interface NavbarProps {
  logoHref?: string
}

const Navbar: React.FC<NavbarProps> = ({ children, logoHref = '/' }) => {
  return (
    <NavStyled>
      <NavbarLogoContainer>
        <A href={logoHref}>
          <Logo />
        </A>
      </NavbarLogoContainer>
      <NavItemsContainer>{children}</NavItemsContainer>
    </NavStyled>
  )
}

export default Navbar
