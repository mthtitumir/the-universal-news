import React from 'react';
import fakeData from "../../../utils/news.json"
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import NewsCardOne from '@/components/newsCards/NewsCardOne';

const AllNews = () => {
    const data1 = fakeData.slice(0,3)
    const data2 = fakeData.slice(3,6)
    const data3 = fakeData.slice(0,10)

    return (
        <div className='flex justify-between'>
            <div>
                <h1>Sports</h1>
                <div>
                    {
                        data1.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <h1>Business</h1>
                <div>
                {
                        data2.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
                <h1>Sports</h1>
                <div>
                    {
                        data1.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
                <h1>Business</h1>
                <div>
                {
                        data2.map(item=> <NewsCardThree
                        key={item.id}
                        item={item}
                        ></NewsCardThree>)
                    }
                </div>
            </div>
            <div>
            <h1>Trending</h1>
                <div>
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