import { Container } from './styles'

export const Button = (props) => {
  const {
    label,
    color,
    variant
  } = props

  return (
    <Container
      type='button'
      size='full'
      variant={variant || 'filled'}
      color={color || 'primary'}
      {...props}
    >
      {label}
    </Container>
  )
}

export default Button