import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import useSplash from '../utils/useSplash'
import { coupons } from '../utils/datas'
import { useModal } from '../utils/modalContext'

import Layout from '../components/Layout'
import Splash from '../components/Splash'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Card from '../components/Card'
import CardModal from '../components/Card/CardModal'
import FloatButton from '../components/Button/FloatButton'

const TIME_TO_SPLASH_SCREEN = 4000

const Home = () => {
  const [showSplash] = useSplash(TIME_TO_SPLASH_SCREEN)
  const { openModal } = useModal()
  const [addButtonIsShown, setAddButtonIsShown] = useState(false)

  const handleClickCard = (ticket) => {
    openModal({
      isVisible: true,
      title: ticket.companyName,
      colorHeader: ticket.color,
      colorTitle: ticket.color,
      colorIcons: ticket.color,
      height: '70%',
      content: <CardModal {...ticket} />
    })
  }

  useEffect(() => {
    const handleFloatButton = () => {
      setAddButtonIsShown(window.scrollY > 100 ? true : false)
    }

    window.addEventListener('scroll', handleFloatButton)

    return () => window.removeEventListener("scroll", handleFloatButton)
  }, [])

  return (
    <>
      <Head>
        <title>Cupons, Descontos e Promoções em Indaiatuba | Feemo</title>
        <meta name="description" content="Cupons, Descontos e Promoções em Indaiatuba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showSplash && <Splash />}

      {!showSplash && (
        <Layout>
          <Header />
          <Feed>
            {coupons.map((ticket, index) => (
              <Card
                key={index}
                type={ticket.type}
                companyName={ticket.companyName}
                title={ticket.title}
                description={ticket.description}
                color={ticket.color}
                textColor={ticket.textColor}
                logo={ticket.logo}
                handleClick={() => handleClickCard(ticket)}
              />
            ))}
          </Feed>
          <FloatButton isVisible={addButtonIsShown}>
            <FiPlus
              color="#FFF"
              size="2rem"
            />
          </FloatButton>
        </Layout>
      )}
    </>
  )
}

export default Home