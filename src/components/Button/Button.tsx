import * as React from 'react'
import styled from 'styled-components'
import is from 'typescript-styled-is'
import { space, SpaceProps, themeGet } from 'styled-system'
import { themeColors, convertSize, applyElevation } from '../../utils/theme'
import {
  ThemeSize,
  ElevationLevel,
  ButtonVariants,
  ColorModes
} from '../../types/theme'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<{}>,
    SpaceProps {
  size: ThemeSize
  elevation: ElevationLevel
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
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  color: ${themeColors('text')};
  transition: 0.2s;
  &:active {
    box-shadow: none;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: ${themeColors('primary')};
  color: ${({ theme }) =>
    (theme.mode as ColorModes) === 'dark'
      ? themeColors('secondary')
      : themeColors('background')};
  &:hover {
    background-color: ${themeColors('primary', 'darkened')};
  }
`
const SecondaryButton = styled(ButtonBase)`
  background-color: ${themeColors('secondary')};
  &:hover {
    background-color: ${themeColors('secondary', 'darkened')};
  }
`
const InfoButton = styled(ButtonBase)`
  border: 2px solid ${themeColors('primary')};
  color: ${themeColors('primary')};
  background-color: ${themeColors('background')}
  &:hover {
    border: 2px solid ${themeColors('primary', 'darkened')};
  }
`

const CleanButton = styled(ButtonBase)`
  border: none;
  background: none;
  box-shadow: none;
  color: ${themeColors('text')};
  &:hover {
    color: ${themeColors('text', 'darkened')};
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
