import React from 'react';
// import fakeData from "../../../utils/news.json"
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import Headline from '@/components/miniComponents/Headline';
import { GetAllNews } from '@/services/GetAllNews';

const MoreNews = async () => {
    const data = await GetAllNews();
    // console.log(data[2]);
    const data2 = data?.slice(45, 53);
    // const data = fakeData.slice(0,8)
    return (
        <div className=''>
            <Headline headline={"More News"} seeMore={""} path={""} />
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data2?.map(item=><NewsCardFour
                    key={item.id}
                    item={item}   
                    ></NewsCardFour>)
                }
            </div>
        </div>
    );
};

export default MoreNews;