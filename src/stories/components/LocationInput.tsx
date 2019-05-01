import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { LocationInput, Location } from '../../index'

const Row = styled.div`
  padding: 16px;
`

const LocationForm = () => {
  const [location, setLocation] = React.useState<Location | null>(null)
  const handleChangeLocation = (location: Location) => {
    console.log(location)
    setLocation(location)
  }
  return (
    <Row>
      <LocationInput
        location={{ description: 'Berlin, Germany' } as any}
        onSelect={handleChangeLocation}
      />

      <code>{location && JSON.stringify(location)}</code>
    </Row>
  )
}

storiesOf('Components', module).add('LocationInput', () => <LocationForm />)
