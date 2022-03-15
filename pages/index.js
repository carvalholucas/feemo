import Head from 'next/head'

import useSplash from '../utils/useSplash'
import { coupons } from '../utils/datas'
import { useModal } from '../utils/modalContext'

import Layout from '../components/Layout'
import Splash from '../components/Splash'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Card from '../components/Card'
import CardModal from '../components/Card/CardModal'

const TIME_TO_SPLASH_SCREEN = 4000

const Home = () => {
  const [showSplash] = useSplash(TIME_TO_SPLASH_SCREEN)
  const { openModal } = useModal()

  const handleClickCard = (ticket) => {
    openModal({
      isVisible: true,
      title: ticket.companyName,
      colorHeader: ticket.color,
      colorTitle: ticket.color,
      colorIcons: ticket.color,
      height: '70%',
      content: <CardModal {...ticket}/>
    })
  }

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
        </Layout>
      )}
    </>
  )
}

export default Home