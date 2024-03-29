import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ToasterContext from './context/ToasterContext'
import Favicon from '../../public/favicon.ico'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import ModalProvider from './providers/ModalProvider'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Консультативно-диагностическая Поликлиника',
  description: 'ООО «Консультативно-диагностическая поликлиника» осуществляет медицинские услуги для населения и организаций Самарской области с 2009 года. За это время мы сформировали дружный коллектив профессионалов, способных оказать качественную, квалифицированную и оперативную консультационную и лечебную помощь гражданам в самых разных ситуациях.',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ModalProvider />
        <ToasterContext />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
