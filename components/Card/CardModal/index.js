import { Container, Logo } from './styles'

const CardModal = ({
  type,
  title,
  description
}) => {
  return (
    <Container>
      {type === 'premium' && <Logo />}
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}

export default CardModal