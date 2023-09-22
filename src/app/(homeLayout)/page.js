import HomeComponent from '@/components/HomeComponent/HomeComponent';
import PhotoSlide from '@/components/PhotoCompoents/PhotoSlide';
import AllNews from '@/components/homeComponents/AllNews/AllNews';
import HomeFood from '@/components/homeComponents/HomeFood/HomeFood';
import HomeJobBanner from '@/components/homeComponents/HomeJobBanner/HomeJobBanner';
import HomePodcast from '@/components/homeComponents/HomePodcast/HomePodcast';
import HomeSports from '@/components/homeComponents/HomeSports/HomeSports';
import HomeVideo from '@/components/homeComponents/HomeVideo/HomeVideo';
import MoreNews from '@/components/homeComponents/MoreNews/MoreNews';
import WeekNews from '@/components/homeComponents/WeekNews/WeekNews';
import { GetAllPhotosFromDB } from '@/services/GetAllNewsFromDB';


const Home = async () => {
  const data = await GetAllPhotosFromDB();
  return (
    <main className='c-auto flex flex-col gap-5'>
      <HomeComponent />
      <div className='hlx'></div>
      <MoreNews />
      <div className='hlx'></div>
      <HomeJobBanner text={"home"} />
      <div className='hlx'></div>
      <AllNews />
      <div className='hlx'></div>
      <PhotoSlide text={"Photos"} seeMore={"See More Photos"} path={"/photo"} data={data}  />
      <div className='hlx'></div>
      <HomeSports />
      <div className='hlx'></div>
      <HomeVideo />
      <div className='hlx'></div>
      <WeekNews />
      <div className='hlx'></div>
      <HomePodcast />
      <div className='hlx'></div>
      <HomeFood />
      <div className='hlx'></div>
    </main>
  )
}

export default Home;
