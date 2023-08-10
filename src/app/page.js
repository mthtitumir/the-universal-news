import Headline from '@/components/miniComponents/Headline'
import NewsCardFour from '@/components/newsCards/NewsCardFour'
import NewsCardOne from '@/components/newsCards/NewsCardOne'
import NewsCardThree from '@/components/newsCards/NewsCardThree'
import NewsCardTwo from '@/components/newsCards/NewsCardTwo'

export default function Home() {
  return (
    <main className='container mx-auto'>
      <div className="divider"></div>
      <NewsCardOne />
      <div className="divider"></div>
      <NewsCardTwo />
      <div className="divider"></div>
      <NewsCardThree />
      <div className="divider"></div>
      <Headline />
      <NewsCardFour />
      <div className="divider"></div>
    </main>
  )
}
