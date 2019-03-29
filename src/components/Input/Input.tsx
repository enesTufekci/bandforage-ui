import * as React from 'react'
import styled from 'styled-components'
import { applyElevation, themeColors } from '../../utils/theme'
import { ElevationLevel } from '../../types/theme'
import is from 'typescript-styled-is'

interface InputStyleProps {
  elevation: ElevationLevel
  block: boolean
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  padding: 1rem 0;
`

const InputLabel = styled.label<{ active: boolean; hasError?: boolean }>`
  position: absolute;
  left: 10px;
  font-size: 0.75rem;
  transition: top 0.3s;
  top: calc(50% - 0.6rem);
  font-weight: bold;
  letter-spacing: 0.5px;
  ${is('hasError')`
    color: ${themeColors('error')}
  `}
  ${is('active')`
    top: 0;
    opacity: 1;
  `};
`

const InputStyled = styled.input<InputStyleProps>`
  ${applyElevation}
  position: relative;
  border: none;
  border-radius: 10px;
  outline: none;
  height: 48px;
  font-size: 1rem;
  width: calc(100% - 20px);
  padding: 0 10px;
  font-size: 1rem;
  color: ${themeColors('text')};
`

interface InputProps extends React.InputHTMLAttributes<any> {
  error?: string
}

const Input: React.FC<InputProps & Partial<InputStyleProps>> = ({
  elevation = 1,
  block = false,
  ...rest
}) => {
  const { value, placeholder, error } = rest
  return (
    <InputContainer>
      {placeholder && !error && (
        <InputLabel active={!!value}>{placeholder}</InputLabel>
      )}
      {error && (
        <InputLabel active hasError>
          {error}
        </InputLabel>
      )}
      <InputStyled {...rest} elevation={elevation} block={block} />
    </InputContainer>
  )
}

export default Input
