import React from 'react'

import { configure, addDecorator, setAddon } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import ThemeProvider from '../src/theme'
import { createGlobalStyle } from 'styled-components'
import { select } from '@storybook/addon-knobs'

import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
})

const req = require.context('../src/stories', true, /.tsx/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
  }
  * {
    font-family: inherit;
    font-size: inherit;
  }
`

addDecorator(withKnobs)
addDecorator(story => {
  const content = story()
  return (
    <ThemeProvider mode={select('Mode', ['dark', 'light'], 'light')}>
      <React.Fragment>
        {content}
        <GlobalStyles />
      </React.Fragment>
    </ThemeProvider>
  )
})
configure(loadStories, module)
