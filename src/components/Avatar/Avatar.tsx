import React from 'react'
import styled from 'styled-components'

import { themeColors } from '../../utils/theme'
import { themeGet } from 'styled-system'

export type AvatarSize = 's' | 'm' | 'l'

export interface AvatarProps {
  imageUrl?: string
  size?: AvatarSize
}

function avatarSize(size: AvatarSize = 'm') {
  return themeGet(`space.${size === 's' ? 3 : size === 'l' ? '5' : '4'}`)
}

const Avatar = styled.div<AvatarProps>`
  color: ${themeColors('primary')};
  background: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : themeColors('primary')};
  background-size: contain;
  width: ${({ size }) => avatarSize(size)};
  height: ${({ size }) => avatarSize(size)};
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid ${themeColors('primary')};
`

export default Avatar
