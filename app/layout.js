import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from './Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pengu Art',
  description: 'Created for Pengu.art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
