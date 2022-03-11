import Image from 'next/image'

import {
  HiMenu as MenuIcon,
  HiChevronDown as ArrowDown
} from "react-icons/hi"

import { useModal } from '../../utils/modalContext'
import { useCities } from '../../utils/citiesContext'

import CitiesModal from './CitiesModal'
import { Container } from './styles'

const Header = () => {
  const { openModal } = useModal()
  const {
    allCities,
    citySelected,
    setCitySelected
  } = useCities()

  const handleMenu = () => {
    openModal({
      isVisible: true,
    })
  }

  const handleCities = () => {
    openModal({
      isVisible: true,
      title: 'Selecione uma cidade',
      colorHeader: '#362076',
      colorTitle: '#FFF',
      colorIcons: '#FFF',
      backIcon: true,
      closeIcon: false,
      content: <CitiesModal
        allCities={allCities}
        citySelected={citySelected?.name}
        setCitySelected={setCitySelected}
      />
    })
  }

  return (
    <>
      <Container>
        <section>
          <MenuIcon
            color="#FFF"
            className="hamburguer-icon"
            size="1.5rem"
            onClick={handleMenu}
          />

          <Image
            src="/images/logo_light.png"
            width={84}
            height={27}
          />
        </section>
        <section
          className="choose-city"
          onClick={handleCities}
        >
          <span>{citySelected?.name || 'Sua cidade'}</span>
          <ArrowDown
            color="#FFF"
            size="1.5rem"
          />
        </section>
      </Container>
    </>
  )
}

export default Header