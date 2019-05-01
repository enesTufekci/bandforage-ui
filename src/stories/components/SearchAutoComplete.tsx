import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { SearchAutoComplete } from '../../index'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Components', module).add('SearchAutoComplete', () => (
  <Row>
    <SearchAutoComplete
      value={'bandforage'}
      onItemClick={() => {}}
      onChange={() => {}}
      items={[
        'Autosuggestion 1',
        'Autosuggestion 2',
        'Autosuggestion 3',
        'Autosuggestion 4'
      ]}
    />
  </Row>
))
