import React from 'react';
import fakeData from "../../../utils/news.json"
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import Headline from '@/components/miniComponents/Headline';

const AllNews = () => {
    const data1 = fakeData.slice(0, 3)
    const data2 = fakeData.slice(3, 6)
    const data3 = fakeData.slice(0, 10)

    return (
        <div className='flex justify-between gap-4 h-screen'>
            <div>
                <Headline headline={"Sports"} seeMore={"See More"} />
                <div className='flex flex-col gap-3'>
                    {
                        data1.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <Headline headline={"Sports"} seeMore={"See More"} />
                <div className='flex flex-col gap-3'>
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
                <Headline headline={"Sports"} seeMore={"See More"} />
                <div className='flex flex-col gap-3'>
                    {
                        data1.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <Headline headline={"Sports"} seeMore={"See More"} />
                <div className='flex flex-col gap-3'>
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
                <Headline headline={"Sports"} seeMore={"See More"} />
                <div className='overflow-auto'>
                    {
                        data3.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllNews;