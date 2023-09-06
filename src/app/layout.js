import {  Josefin_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';
import Toaster from "@/components/Toaster"

const josefinSans = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${josefinSans.className} bg-white`}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
