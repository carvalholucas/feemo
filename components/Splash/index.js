import Image from 'next/image'

import { Container } from './styles'

const Splash = () => {
  return (
    <Container>
      <Image
        src="/images/logo_light.png"
        width={185}
        height={62}
      />
    </Container>
  )
}

export default Splash