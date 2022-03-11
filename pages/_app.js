import '../styles/globals.css'

import { ModalContextProvider } from '../utils/modalContext'
import { CityContextProvider } from '../utils/citiesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <CityContextProvider>
        <Component {...pageProps} />
      </CityContextProvider>
    </ModalContextProvider>
  )
}

export default MyApp
