import styled from 'styled-components'
import { themeGet } from 'styled-system'

const contentWidth = themeGet('contentWidth')

const Container = styled.div`
  max-width: ${contentWidth};
  width: ${contentWidth};
  margin: 0 auto;
`

export default Container
