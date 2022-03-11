import { useState } from 'react'

import { useModal } from '../../utils/modalContext'
import Button from '../Button'

import {
  List,
  ListItem,
  ContainerModal,
  ButtonWrapper
} from './styles'

const CitiesModal = ({
  allCities,
  citySelected,
  setCitySelected
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const { toggleModal } = useModal()

  const handleChangeCity = (city) => {
    setCitySelected(city)
    setButtonDisabled(false)
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
          </ListItem>
        ))}
      </List>

      <ButtonWrapper>
        <Button
          label="Confirmar"
          color="secondary"
          disabled={buttonDisabled}
          onClick={() => toggleModal()}
        />
      </ButtonWrapper>
    </ContainerModal>
  )
}

export default CitiesModal