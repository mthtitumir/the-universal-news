import HomeComponent from '@/components/HomeComponent/HomeComponent';
import PhotoSlide from '@/components/PhotoCompoents/PhotoSlide';
import AllNews from '@/components/homeComponents/AllNews/AllNews';
import HomeFood from '@/components/homeComponents/HomeFood/HomeFood';
import HomeJobBanner from '@/components/homeComponents/HomeJobBanner/HomeJobBanner';
// import HomeMovie from '@/components/homeComponents/HomeMovie/HomeMovie';
import HomePodcast from '@/components/homeComponents/HomePodcast/HomePodcast';
import HomeSports from '@/components/homeComponents/HomeSports/HomeSports';
import HomeVideo from '@/components/homeComponents/HomeVideo/HomeVideo';
import MoreNews from '@/components/homeComponents/MoreNews/MoreNews';
import WeekNews from '@/components/homeComponents/WeekNews/WeekNews';


export default function Home() {
  return (
    <main className='c-auto'>
      <HomeComponent />
      <div className="divider"></div>
      <MoreNews />
      <HomeJobBanner text={"home"} />
      <AllNews />
      <PhotoSlide text={"Photos"} seeMore={"See More Photos"} path={"/photo"} />
      <HomeSports />
      {/* <HomeMovie /> */}
      <HomeVideo />
      <WeekNews />
      <HomePodcast />
      <HomeFood />
    </main>
  )
}
