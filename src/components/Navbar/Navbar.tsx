import * as React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { themeGet } from 'styled-system'
import A from '../A'
import Container from '../Container'

const NavStyled = styled.nav`
  ${Container} {
    height: 84px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const NavbarLogoContainer = styled.div``

const NavItemsContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
      <Container>
        <NavbarLogoContainer>
          <A href={logoHref}>
            <Logo />
          </A>
        </NavbarLogoContainer>
        <NavItemsContainer>{children}</NavItemsContainer>
      </Container>
    </NavStyled>
  )
}

export default Navbar
