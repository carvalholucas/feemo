import { HiChevronDown as ArrowDown } from "react-icons/hi"
import { MdOutlinePlace as PlaceIcon } from "react-icons/md"

import { useModal } from '../../../utils/modalContext'
import { useCities } from '../../../utils/citiesContext'

import CitiesModal from '../CitiesModal'
import { Container } from './styles'

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

  return (
    <Container onClick={handleCities}>
      <div className="place-icon">
        <PlaceIcon size="1.2rem"/>
      </div>
      <span>{citySelected?.name || 'Selecione uma cidade'}</span>
      <ArrowDown size="1.5rem"/>
    </Container>
  )
}

export default SubHeader
