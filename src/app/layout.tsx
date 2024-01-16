import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RecoilRootProvider from '../utils/recoilRootProvider'
import QueryClientRootProvider from '@/utils/queryClientRootProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sfaclog',
  description: 'Sfaclog project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootProvider>
          <QueryClientRootProvider>
            {children}
          </QueryClientRootProvider>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
