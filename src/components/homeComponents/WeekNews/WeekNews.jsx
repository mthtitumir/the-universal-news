import React from 'react';
import fakeData from "../../../utils/news.json"
import Headline from '@/components/miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import Image from 'next/image'
import './WeeklyNews.css'

const WeekNews = () => {
    const data = fakeData.slice(0, 20);
    const data2 = fakeData.slice(0, 20);


    return (
        <div className='mt-5 grid grid-cols-12 gap-3 md:h-[70vh]'>
            <div className='col-span-4 overflow-y-scroll overflow-x-hidden card1'>
                <Headline headline={"Week's Hottest"} seeMore={"see more"} />
                <div className='flex flex-col gap-3'>
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div className='col-span-5 overflow-y-scroll overflow-x-hidden card1'>
                <Headline headline={"Weekly News"} seeMore={"see more"} />
                <div>
                    {
                        data.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
            </div>
            <div className='relative col-span-3'>
                <Image
                    src="https://i.ibb.co/92BFdLM/5190537997-89cf7af050-c.jpg"
                    height={400}
                    width={300}
                    alt="Advertisement"
                    className=' absolute right-0 '
                >
                </Image>
            </div>
        </div>
    );
};

export default WeekNews;