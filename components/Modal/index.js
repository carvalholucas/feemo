import {
  MdOutlineClose as CloseIcon,
  MdKeyboardArrowLeft as BackIcon
} from 'react-icons/md'

import { useModal } from '../../utils/modalContext'

import Portal from '../../utils/Portal'

import {
  Backdrop,
  Container,
  Header,
  Title,
  Content
} from './styles'

const Modal = ({
  title,
  backIcon,
  closeIcon,
  colorHeader,
  colorIcons,
  colorTitle,
  height,
  position,
  content,
}) => {
  const { isShown, toggleModal } = useModal()

  return (
    <>
      {isShown && (
        <Portal>
          <Backdrop
            position={position}
          >
            <Container
              height={height}
            >
              <Header colorHeader={colorHeader}>
                {backIcon && (
                  <BackIcon
                    className="back-icon"
                    color={colorIcons}
                    size="2rem"
                    onClick={toggleModal}
                  />
                )}

                <Title colorTitle={colorTitle}>{title}</Title>

                {closeIcon && (
                  <CloseIcon
                    className="close-icon"
                    color={colorIcons}
                    size="1.5rem"
                    onClick={toggleModal}
                  />
                )}
              </Header>
              <Content>
                {content}
              </Content>
            </Container>
          </Backdrop>
        </Portal>
      )}
    </>
  )
}

export default Modal