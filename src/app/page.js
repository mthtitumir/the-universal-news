import HomeComponent from '@/components/HomeComponent/HomeComponent'
import Carosoul from '@/components/homeComponents/Carosoul/Carosoul'

export default function Home() {
  return (
    <main className='container bg-white mx-auto'>
      <HomeComponent/>
      <div className='w-full'>
        <Carosoul></Carosoul>
      </div>
    </main>
  )
}
