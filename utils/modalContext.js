import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

import Modal from '../components/Modal'

export const ModalContext = createContext({})

const INITIAL_MODAL_PROPS = {
  backIcon: false,
  closeIcon: true,
  colorHeader: '#FFF',
  colorIcons: '#8b8b8b',
  colorTitle: '#8b8b8b',
  height: '100%',
  position: 'bottom'
}

export const ModalContextProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(false)
  const [modalPros, setModalProps] = useState(INITIAL_MODAL_PROPS)

  const toggleModal = () => setIsShown(!isShown)

  const openModal = (props) => {
    setModalProps({ ...INITIAL_MODAL_PROPS, ...props })
  }

  const state = {
    isShown,
    toggleModal,
    openModal
  }

  useEffect(() => {
    modalPros.isVisible && setIsShown(modalPros.isVisible)
  }, [modalPros])

  return (
    <ModalContext.Provider value={state}>
      <Modal {...modalPros} />
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}