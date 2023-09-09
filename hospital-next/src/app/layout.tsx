import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Консультативно-диагностическая Поликлиника',
  description: 'ООО «Консультативно-диагностическая поликлиника» осуществляет медицинские услуги для населения и организаций Самарской области с 2009 года. За это время мы сформировали дружный коллектив профессионалов, способных оказать качественную, квалифицированную и оперативную консультационную и лечебную помощь гражданам в самых разных ситуациях.',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
