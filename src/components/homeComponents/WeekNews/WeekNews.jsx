import React from 'react';
import fakeData from "../../../utils/news.json"
import Headline from '@/components/miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardTwo from '@/components/newsCards/NewsCardTwo';
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import Image from 'next/image'




const WeekNews = () => {
    const data = fakeData.slice(0, 8);
    const data1 = fakeData.slice(0, 1);
    const data2 = fakeData.slice(0, 4);


    return (
        <div className='mt-5 md:mb-4'>
            <div className=''>
                <div className='grid md:grid-cols-3'>
                    <div className=''>
                        <Headline headline={"Weekly News"} seeMore={"see more"} />

                        {
                            data2.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                    <div className=''>
                        <div className=''>
                            <Headline headline={"Weekly News"} seeMore={"see more"} />
                            {
                                data.map(item => <NewsCardOne
                                    key={item.id}
                                    item={item}
                                ></NewsCardOne>)
                            }
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src="https://i.ibb.co/t8L980p/New-Project-1.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                </div>
            </div>
        </div>
    );
};

export default WeekNews;