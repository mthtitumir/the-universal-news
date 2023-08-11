import HomeComponent from '@/components/HomeComponent/HomeComponent'
import Carosoul from '@/components/homeComponents/Carosoul/Carosoul'
import MoreNews from '@/components/homeComponents/MoreNews/MoreNews'

export default function Home() {
  return (
    <main className='container bg-white mx-auto'>
      <HomeComponent/>
      <MoreNews/>
      <div className='w-full'>
        <Carosoul></Carosoul>
      </div>
    </main>
  )
}
