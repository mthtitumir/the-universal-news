import Headline from '@/components/miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import Image from 'next/image'
import './WeeklyNews.css'
import { GetAllNews } from "@/services/GetAllNews";

const WeekNews = async () => {
    const data = await GetAllNews();
    const data1 = data.slice(0, 20);
    const data2 = data.slice(20, 40);


    return (
        <div className='mt-5 grid md:grid-cols-12 gap-2 md:h-[70vh]'>
            <div className='md:col-span-4 overflow-y-scroll overflow-x-hidden card1 vly'>
                <Headline headline={"Week's Hottest"} seeMore={""} path={""} />
                <div className='flex flex-col gap-3'>
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div className='md:col-span-5 overflow-y-scroll overflow-x-hidden card1 vly'>
                <Headline headline={"Weekly News"} seeMore={""} path={""} />
                <div>
                    {
                        data.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
            </div>
            <div className='pl-2 md:col-span-3'>
                <Image
                    src="https://i.ibb.co/92BFdLM/5190537997-89cf7af050-c.jpg"
                    height={400}
                    width={300}
                    alt="Advertisement"
                    className=''
                >
                </Image>
            </div>
        </div>
    );
};

export default WeekNews;