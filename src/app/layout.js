import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const robotoStyles = {
  fontFamily: "var(--font-roboto)",
};

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body style={robotoStyles} className="bg-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
