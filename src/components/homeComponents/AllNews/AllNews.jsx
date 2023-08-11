import React from 'react';
import fakeData from "../../../utils/news.json"
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import NewsCardOne from '@/components/newsCards/NewsCardOne';

const AllNews = () => {
    const data1 = fakeData.slice(0,3)
    const data2 = fakeData.slice(3,6)
    const data3 = fakeData.slice(0,10)

    return (
        <div className='flex justify-between gap-4'>
            <div>
                <div className='flex justify-between pr-4'>
                    <h1 className='text-2xl font-bold'>Sports</h1>
                    <p>See more</p>
                </div>
                <div className='pb-6'>
                    {
                        data1.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <div className='flex justify-between pr-4'>
                    <h1 className='text-2xl font-bold'>Sports</h1>
                    <p>See more</p>
                </div>
                <div className='pb-6'>
                {
                        data2.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
            <div className='flex justify-between pr-4'>
                    <h1 className='text-2xl font-bold'>Sports</h1>
                    <p>See more</p>
                </div>
                <div className='pb-6'>
                    {
                        data1.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <div className='flex justify-between pr-4'>
                    <h1 className='text-2xl font-bold'>Sports</h1>
                    <p>See more</p>
                </div>
                <div className='pb-6'>
                {
                        data2.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
            <div className='flex justify-between pr-4'>
                    <h1 className='text-2xl font-bold'>Sports</h1>
                    <p>See more</p>
                </div>
                <div className='pb-6'>
                {
                        data3.map(item=> <NewsCardOne
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