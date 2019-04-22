import styled from 'styled-components'
import { themeGet } from 'styled-system'

const contentWidth = themeGet('contentWidth')

const Container = styled.div`
  width: ${contentWidth};
  max-width: 100vw;
  margin: 0 auto;
`

export default Container
