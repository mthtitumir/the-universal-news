import React from 'react';
import fakeData from "../../../utils/news.json"
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import Headline from '@/components/miniComponents/Headline';

const AllNews = () => {
    const data1 = fakeData.slice(0, 3)
    const data2 = fakeData.slice(3, 6)
    const data3 = fakeData.slice(0, 11)

    return (
        <div className='grid md:grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <div>
                    <Headline headline={"Climate"} seeMore={"See More"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data1.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Headline headline={"Technology"} seeMore={"See More"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data2.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <div>
                    <Headline headline={"Entertainment"} seeMore={"See More"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data1.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Headline headline={"Science"} seeMore={"See More"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data2.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
            </div>
            <div className='row-span-1 col-span-4 overflow-y-scroll overflow-x-hidden card1'>
                <Headline headline={"Trending"} seeMore={"See More"} />
                <div className='mt-5'>
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