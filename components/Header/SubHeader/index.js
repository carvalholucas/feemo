import { useEffect } from 'react'

import { HiChevronDown as ArrowDown } from "react-icons/hi"
import { MdOutlinePlace as PlaceIcon } from "react-icons/md"

import { useModal } from '../../../utils/modalContext'
import { useCities } from '../../../utils/citiesContext'

import CitiesModal from '../CitiesModal'
import { Container } from './styles'

const INITIAL_CITY_LABEL = 'Selecione uma cidade'

const SubHeader = () => {
  const { openModal } = useModal()
  const {
    allCities,
    citySelected,
    setCitySelected
  } = useCities()

  const handleCities = () => {
    openModal({
      isVisible: true,
      title: 'Selecione uma cidade',
      backIcon: true,
      closeIcon: false,
      height: '60%',
      content: <CitiesModal
        allCities={allCities}
        citySelected={citySelected?.name}
        setCitySelected={setCitySelected}
      />
    })
  }

  useEffect(() => {
    !citySelected?.name && handleCities()
  }, [citySelected])

  return (
    <Container onClick={handleCities}>
      <div className="place-icon">
        <PlaceIcon size="1.8rem" />
      </div>
      <span>
        {citySelected?.name || INITIAL_CITY_LABEL}
      </span>
      <ArrowDown size="1.5rem" />
    </Container>
  )
}

export default SubHeader
