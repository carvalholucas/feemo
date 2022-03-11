import Image from 'next/image'

import {
  Container,
  CompanyName,
  Logo
} from './styles'

const Card = ({
  type,
  companyName,
  title,
  description,
  color,
  textColor,
  logo,
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
        <header>
          <CompanyName>{companyName}</CompanyName>
        </header>

        <h5 className="ticket-title">{title}</h5>
        <p className="ticket-description">{description}</p>
      </Container>
    )
  }

  if (type === 'premium') {
    return (
      <Container
        type={type}
        color={color}
        textColor={textColor}
        onClick={handleClick}
      >
        <Logo>
          <Image
            src='/images/logo_example3.png'
            width={90}
            height={45}
          />
        </Logo>

        <h5 className="ticket-title">{title}</h5>
        <p className="ticket-description">{description}</p>
      </Container>
    )
  }

  if (type === 'pro') {
    return (
      <Container
        type={type}
        color={color}
        onClick={handleClick}
      >
        <div className="bg">
          <div className="logo"></div>
        </div>

        <div className="ticket-wrapper-desc">
          <h5 className="ticket-title">{title}</h5>
          <p className="ticket-description">{description}</p>
        </div>
      </Container>
    )
  }
}

export default Card