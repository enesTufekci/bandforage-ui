import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { Button } from '../index'

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`

storiesOf('Button', module).add('basic', () => (
  <React.Fragment>
    <div>
      <h2>Variants</h2>
      <Row>
        <div>
          <Button>Primary</Button>
        </div>
        <div>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div>
          <Button variant="info">Info</Button>
        </div>
        <div>
          <Button variant="clean">Clean</Button>
        </div>
      </Row>
      <hr />
    </div>
    <div>
      <h2>Sizes</h2>
      <Row>
        <div>
          <Button size="sm">Primary</Button>
        </div>
        <div>
          <Button size="md" variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button size="lg" variant="info">
            Info
          </Button>
        </div>
        <div>
          <Button size="xl">Primary</Button>
        </div>
      </Row>
      <hr />
    </div>
    <div>
      <h2>As tag</h2>
      <Row>
        <div>
          <Button tag>Primary</Button>
        </div>
        <div>
          <Button tag variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button tag variant="info">
            Info
          </Button>
        </div>
        <div>
          <Button tag variant="clean">
            Clean
          </Button>
        </div>
      </Row>
      <hr />
    </div>
  </React.Fragment>
))
