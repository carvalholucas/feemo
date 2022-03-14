import {
  Container,
  Header,
  Content,
  Logo
} from './styles'

const Card = ({
  type,
  companyName,
  title,
  description,
  color,
  plan,
  handleClick
}) => {

  if (type === 'free') {
    return (
      <Container
        plan={plan}
        type={type}
        onClick={handleClick}
      >
        <Header><span>{companyName}</span></Header>

        <Content>
          <h5 className="ticket-title">{title}</h5>
          <p className="ticket-description">{description}</p>
        </Content>
      </Container>
    )
  }

  if (type === 'premium') {
    return (
      <Container
        type={type}
        onClick={handleClick}
      >
        <Header color={color} className="header">
          <Logo />
          <span>{companyName}</span>
        </Header>

        <Content>
          <h5 className="ticket-title">{title}</h5>
          <p className="ticket-description">{description}</p>
        </Content>
      </Container>
    )
  }
}

export default Card