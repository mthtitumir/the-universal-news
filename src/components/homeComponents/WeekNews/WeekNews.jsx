import React from 'react';
import fakeData from "../../../utils/news.json"
import Headline from '@/components/miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import Image from 'next/image'
import './WeeklyNews.css'




const WeekNews = () => {
    const data = fakeData.slice(0, 5);
    const data2 = fakeData.slice(0, 4);


    return (
        <div className='mt-5 md:mb-4 '>
            <div className='grid md:grid-cols-3 grid-layout w-[97%] mx-auto gap-7'>
                <div className='flex flex-col gap-3 h-[400px] '>
                    <Headline headline={"Weekly News"} seeMore={"see more"} />
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <div className=''>
                    <div className='lg:h-20 h-[400px] '>
                        <Headline headline={"Weekly News"} seeMore={"see more"} />
                        {
                            data.map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                </div>
                <div className='mt-6'>
                    <Image
                        src="https://i.ibb.co/92BFdLM/5190537997-89cf7af050-c.jpg"
                        height={400}
                        width={300}
                        alt="Picture of the author"
                    >
                    </Image>
                </div>
            </div>
        </div>
    );
};

export default WeekNews;