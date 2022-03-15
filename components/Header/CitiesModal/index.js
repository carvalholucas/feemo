import { HiChevronRight as ArrowRight } from "react-icons/hi"

import { useModal } from '../../../utils/modalContext'

import {
  List,
  ListItem,
  ContainerModal
} from './styles'

const CitiesModal = ({
  allCities,
  citySelected,
  setCitySelected
}) => {
  const { toggleModal } = useModal()

  const handleChangeCity = (city) => {
    setCitySelected(city)
    localStorage.setItem('city', JSON.stringify(city))
    toggleModal()
  }

  return (
    <ContainerModal>
      <List>
        {allCities?.map(city => (
          <ListItem
            key={city.id}
            className={citySelected === city.name && 'active'}
            onClick={() => handleChangeCity(city)}
          >
            {city.name}
            <ArrowRight size="2rem" />
          </ListItem>
        ))}
      </List>
    </ContainerModal>
  )
}

export default CitiesModal