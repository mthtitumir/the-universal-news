import React from 'react';
import fakeData from "../../utils/news.json"
import NewsCardOne from '../newsCards/NewsCardOne';
import NewsCardTwo from '../newsCards/NewsCardTwo';
import NewsCardThree from '../newsCards/NewsCardThree';

const HomeComponent = () => {
   const data = fakeData.slice(0,6);
   const data1 = fakeData.slice(0,1);
   const data2 = fakeData.slice(0,3);
    return (
        <div className='bg-base-200 mt-5'>
            <h1 className='text-2xl font-bold'>Recent News</h1>
            <div className='flex gap-5 justify-between  items-center'>
                <div className='px-8'>
                    {
                        data.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
                <div className='h-60'>
                    {
                        data1.map(item => <NewsCardTwo
                            key={item.id}
                            item={item}
                        ></NewsCardTwo>)
                    }
                </div>
                <div>
                    {
                        data2.map(item => <NewsCardThree
                            key={item.id}
                            item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;