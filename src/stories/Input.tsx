import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import StoryWrapper from '../components/utils/storybook'
import { Input } from '../index'

const Row = styled.div`
  padding: 16px;
`

const InputContainer = ({ error = null }) => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      type="text"
      placeholder="Email Address"
      value={value}
      onChange={event => setValue(event.target.value)}
      error={error}
      block
    />
  )
}

storiesOf('Input', module).add('text', () => (
  <StoryWrapper>
    <InputContainer />
  </StoryWrapper>
))

storiesOf('Input', module).add('text with error', () => (
  <StoryWrapper>
    <InputContainer error="Is required!" />
  </StoryWrapper>
))
