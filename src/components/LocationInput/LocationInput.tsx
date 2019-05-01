import * as React from 'react'

import SearchAutocomplete from '../SearchAutoComplete'

const LocationContext = React.createContext<{
  autocompleteService: google.maps.places.AutocompleteService
  geoCoder: google.maps.Geocoder
}>({} as any)

const LocationProvider: React.FC = ({ children }) => {
  return (
    <LocationContext.Provider
      value={{
        autocompleteService: new google.maps.places.AutocompleteService(),
        geoCoder: new google.maps.Geocoder()
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export type Location = {
  placeId: string
  lat: number
  lng: number
  description: string
}

interface LocationInputProps {
  onSelect?: (location: Location) => void
  location?: Location
}

const LocationInput: React.FC<LocationInputProps> = ({
  onSelect,
  location
}) => {
  const { autocompleteService, geoCoder } = React.useContext(LocationContext)
  const [value, setValue] = React.useState<string>(
    location ? location.description : ''
  )
  const [results, setResults] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
    if (value && value !== '') {
      autocompleteService.getPlacePredictions(
        {
          types: ['geocode'],
          input: value
        },
        results => setResults(results)
      )
    } else {
      setResults([])
    }
  }

  const handleSelect = (
    prediction: google.maps.places.AutocompletePrediction
  ) => () => {
    console.log(prediction)
    geoCoder.geocode(
      {
        placeId: prediction.place_id
      },
      ([result]) => {
        if (result) {
          setValue(prediction.description)
          setResults([])
          onSelect &&
            onSelect({
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
              placeId: result.place_id,
              description: prediction.description
            })
        }
      }
    )
  }
  return (
    <SearchAutocomplete
      items={results}
      value={value}
      onChange={handleChange}
      onItemClick={handleSelect}
      propToDisplay={'description'}
      propToKey={'place_id'}
    />
  )
}

export default (props: LocationInputProps) => (
  <LocationProvider>
    <LocationInput {...props} />
  </LocationProvider>
)
