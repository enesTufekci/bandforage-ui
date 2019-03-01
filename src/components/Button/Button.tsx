import * as React from 'react'
import styled from 'styled-components'
import is from 'typescript-styled-is'
import { space, SpaceProps, themeGet } from 'styled-system'
import { themeColors, convertSize, applyElevation } from '../../utils/theme'
import { ThemeSize, Elevation, ButtonVariants } from '../../types/theme'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<{}>,
    SpaceProps {
  size: ThemeSize
  elevation: Elevation
  tag: boolean
}

const ButtonBase = styled.button<ButtonProps>`
  ${space}
  ${applyElevation}
  min-width: ${themeGet('space.6')};
  ${is('tag')`
    padding: ${themeGet('space.1')} ${themeGet('space.2')};
    min-width: auto;
    font-weight: 300;
  `}
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 3px;
  color: white;
  transition: 0.3s;
  &:active {
    box-shadow: none;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: ${themeColors('primary')};
  &:hover {
    background-color: ${themeColors('primary', 'Darkened')};
  }
`
const SecondaryButton = styled(ButtonBase)`
  background-color: ${themeColors('secondary')};
  &:hover {
    background-color: ${themeColors('secondary', 'Darkened')};
  }
`
const InfoButton = styled(ButtonBase)`
  border: 2px solid ${themeColors('primary')};
  color: ${themeColors('primary')};
  &:hover {
    border: 2px solid ${themeColors('primary', 'Darkened')};
  }
`

const CleanButton = styled(ButtonBase)`
  border: none;
  background: none;
  box-shadow: none;
  color: ${themeColors('primary')};
  &:hover {
    color: ${themeColors('primary', 'Darkened')};
  }
`

const BUTTONS: { [key in ButtonVariants]: React.ReactType } = {
  ['primary']: PrimaryButton,
  ['secondary']: SecondaryButton,
  ['info']: InfoButton,
  ['clean']: CleanButton
}

const Button: React.FC<Partial<ButtonProps> & { variant?: ButtonVariants }> = ({
  variant = 'primary',
  size = 'md',
  elevation = 1,
  tag = false,
  children,
  ...rest
}) => {
  const py = convertSize(size)
  const buttonProps = { size, elevation, tag, py, children }
  const Button = BUTTONS[variant]

  return <Button {...buttonProps} {...rest} />
}

export default Button
