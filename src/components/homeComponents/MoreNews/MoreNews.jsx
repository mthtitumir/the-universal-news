import React from 'react';
import fakeData from "../../../utils/news.json"
import NewsCardFour from '@/components/newsCards/NewsCardFour';

const MoreNews = () => {

    const data = fakeData.slice(0,8)
    return (
        <div className='my-12'>
            <h1 className='text-2xl font-bold'>More News</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data.map(item=><NewsCardFour
                    key={item.id}
                    item={item}
                    
                    ></NewsCardFour>)
                }
            </div>
        </div>
    );
};

export default MoreNews;