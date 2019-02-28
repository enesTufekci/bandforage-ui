import * as React from 'react'
import styled from 'styled-components'
import { themeColors } from '../../utils/theme/themeColors'
import { ThemeVariants } from '../../types/theme'

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  theme?: ThemeVariants
}

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 8px 16px;
  background-color: red;
  color: white;
`

const Button: React.FC<ButtonProps> = ({
  theme = 'primary' as ThemeVariants,
  children,
  ...rest
}) => (
  <ButtonStyled theme={theme} {...rest}>
    {children}
  </ButtonStyled>
)

export default Button
