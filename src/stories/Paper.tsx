import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Paper } from '../components/Paper'

const Row = styled.div`
  padding: 16px;
`

storiesOf('Paper', module).add('basic', () => (
  <Row>
    <Paper>
      <article style={{ padding: '16px' }}>
        <p>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            natus ipsum id, atque vitae sint non placeat dignissimos suscipit
            architecto et quaerat ut velit exercitationem expedita nulla
            nesciunt neque consequuntur?
          </span>
          <span>
            Consectetur, natus. Vero earum quo ab delectus ducimus architecto
            omnis impedit atque corporis laborum eos, autem veritatis, nostrum
            explicabo, repellat molestias illo! Esse eum voluptates
            necessitatibus odio doloribus aspernatur rem?
          </span>
        </p>
        <p>
          <span>
            Est, natus assumenda doloremque amet id suscipit repellendus, nemo
            vitae impedit ex, repellat veritatis obcaecati esse maxime magni.
            Debitis atque esse eum ut quibusdam repudiandae adipisci, ratione
            molestias cumque corporis.
          </span>
          <span>
            Rem, nemo aperiam. Delectus earum magnam esse natus facere modi
            aspernatur voluptate sequi exercitationem adipisci doloribus
            voluptatum officiis nemo, recusandae necessitatibus ducimus
            laboriosam harum temporibus aut iure tempora voluptates. Aliquid.
          </span>
        </p>
      </article>
    </Paper>
  </Row>
))
