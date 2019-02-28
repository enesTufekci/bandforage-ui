import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import theme from '../src/theme'

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

addDecorator(withKnobs)
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
configure(loadStories, module)
