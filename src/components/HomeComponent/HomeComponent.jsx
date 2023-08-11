import React from 'react';
import fakeData from "../../utils/news.json"
import NewsCardOne from '../newsCards/NewsCardOne';
import NewsCardTwo from '../newsCards/NewsCardTwo';
import NewsCardThree from '../newsCards/NewsCardThree';
import Headline from '../miniComponents/Headline';

const HomeComponent = () => {
   const data = fakeData.slice(0,6);
   const data1 = fakeData.slice(0,1);
   const data2 = fakeData.slice(0,3);
    return (
        <div className='mt-5'>
            <Headline headline={"Recent News"} seeMore={""} />
            <div className='grid md:grid-cols-3'>
                <div className=''>
                    {
                        data.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
                <div className='h-60 '>
                    {
                        data1.map(item => <NewsCardTwo
                            key={item.id}
                            item={item}
                        ></NewsCardTwo>)
                    }
                </div>
                <div className=''>
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