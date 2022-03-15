import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

export const CityContext = createContext({})

const INITIAL_STATE_ALL_CITIES = [
  { id: 1, name: 'Americana' },
  { id: 2, name: 'Campinas' },
  { id: 3, name: 'Hortolândia' },
  { id: 4, name: 'Indaiatuba' },
  { id: 5, name: 'Jaguariúna' },
  { id: 6, name: 'Jundiaí' }
]

export const CityContextProvider = ({ children }) => {
  const [allCities, setAllCities] = useState(INITIAL_STATE_ALL_CITIES)
  
  const [citySelected, setCitySelected] = useState(
    INITIAL_STATE_ALL_CITIES.length === 1
      ? INITIAL_STATE_ALL_CITIES[0]
      : null
  )

  const state = {
    allCities,
    citySelected,
    setCitySelected
  }

  useEffect(() => {
    const cityStoraged = JSON.parse(localStorage.getItem('city'))

    if(!citySelected?.name && !!cityStoraged) {
      setCitySelected(cityStoraged)
    }
  }, [])

  return (
    <CityContext.Provider value={state}>
      {children}
    </CityContext.Provider>
  )
}

export const useCities = () => {
  return useContext(CityContext)
}