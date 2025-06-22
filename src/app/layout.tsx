import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import ReactQueryProvider from '@/providers/react-query'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Aris Alpha',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${poppins.variable} antialiased`}>
            <body>
                <ReactQueryProvider>{children}</ReactQueryProvider>

                <Toaster />
            </body>
        </html>
    )
}
