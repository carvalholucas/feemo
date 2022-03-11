import { IoFilter as FilterIcon } from "react-icons/io5"

import {
  Container,
  Title,
  Icon
} from './styles'

const Feed = ({ children }) => {
  return (
    <Container>
      <Title>
        <Icon>
          <FilterIcon
            color="#362076"
            size="1rem"
          />
          <span>Filtrar</span>
        </Icon>
      </Title>
      {children}
    </Container>
  )
}

export default Feed