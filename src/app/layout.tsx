import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import SessionProvider from './SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'virtual shop',
  description: 'we make ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar></Navbar>
          <main className='p-4 max-w-7xl mx-auto min-w-[300px]'>
            {children}
          </main>
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  )
}

