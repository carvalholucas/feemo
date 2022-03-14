import Image from 'next/image'

import { HiMenu as MenuIcon } from "react-icons/hi"

import { useModal } from '../../utils/modalContext'

import SubHeader from './SubHeader'
import { Container } from './styles'

const Header = () => {
  const { openModal } = useModal()

  const handleMenu = () => {
    openModal({
      isVisible: true,
    })
  }

  return (
    <>
      <Container>
        <MenuIcon
          color="#7A3DF6"
          className="hamburguer-icon"
          size="1.6rem"
          onClick={handleMenu}
        />

        <Image
          src="/images/icon_dark.png"
          width={40}
          height={28}
        />
      </Container>
      <SubHeader />
    </>
  )
}

export default Header