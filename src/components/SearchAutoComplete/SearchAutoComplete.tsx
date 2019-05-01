import * as React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import Input from '../Input'
import { applyElevation, themeColors } from '../../utils/theme'
import { ElevationLevel } from '../../types/theme'

const Container = styled.div`
  position: relative;
`

const AutoCompleteList = styled.ul<{ elevation: ElevationLevel }>`
  ${applyElevation};
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  list-style: none;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`

const AutoCompleteListItem = styled.li`
  cursor: pointer;
  padding: ${themeGet('space.2')};
  transition: 200ms;
  color: ${themeGet('text')};
  background-color: ${themeColors('background')};
  &:hover {
    background-color: ${themeColors('background', 'darkened')};
  }
`

interface SearchAutocompleteProps extends React.InputHTMLAttributes<any> {
  items: any[]
  propToKey?: string | number
  inputClassName?: string
  propToDisplay?: string
  onItemClick: () => void
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  items = [],
  propToDisplay,
  onItemClick,
  inputClassName,
  className,
  propToKey,
  ...inputProps
}) => {
  console.log(items)
  return (
    <Container className={className}>
      <Input {...inputProps} />
      <AutoCompleteList elevation={1}>
        {items.map((item, index) => (
          <AutoCompleteListItem
            key={propToKey ? item[propToKey] : index}
            onClick={onItemClick(item)}
          >
            {propToDisplay ? item[propToDisplay] : item}
          </AutoCompleteListItem>
        ))}
      </AutoCompleteList>
    </Container>
  )
}

export default SearchAutocomplete
