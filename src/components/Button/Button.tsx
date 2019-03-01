import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps, themeGet } from 'styled-system'
import { themeColors, convertSize, applyElevation } from '../../utils/theme'
import { ThemeVariants, ThemeSize, Elevation } from '../../types/theme'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<{}>,
    SpaceProps {
  variant: ThemeVariants
  size: ThemeSize
  elevation: Elevation
}

const bgColorOrBorder = ({ variant }: ButtonProps) => {
  console.log(variant)
  if (variant === 'info') {
    return () => 'border-color'
  }
  return () => 'background-color'
}

const ButtonStyled = styled.button<ButtonProps>`
  ${space}
  ${applyElevation}
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 3px;
  ${bgColorOrBorder}: ${({ variant }) => themeColors(variant)};
  color: white;
  min-width: ${themeGet('space.6')};
  transition: 0.3s;
  &:active {
    box-shadow: none;
  }
  &:hover {
    ${bgColorOrBorder}: ${({ variant }) => themeColors(variant, 'Darkened')};
  }
`

const Button: React.FC<Partial<ButtonProps>> = ({
  variant = 'primary',
  size = 'md',
  elevation = 1,
  children,
  ...rest
}) => (
  <ButtonStyled
    elevation={elevation}
    py={convertSize(size)}
    size={size}
    variant={variant}
    {...rest}
  >
    {children}
  </ButtonStyled>
)

export default Button
