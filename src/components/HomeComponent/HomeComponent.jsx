import React from 'react';
import fakeData from "../../utils/news.json"
import NewsCardOne from '../newsCards/NewsCardOne';
import NewsCardTwo from '../newsCards/NewsCardTwo';
import NewsCardThree from '../newsCards/NewsCardThree';
import Headline from '../miniComponents/Headline';
import "./HomeComponent.css"

const HomeComponent = () => {
   const data = fakeData.slice(0,20);
   const data1 = fakeData.slice(0, 10);
   const data2 = fakeData.slice(0,10);
    return (
        <div className='mt-5 '>
            <Headline headline={"Recent News"} seeMore={""} />
            <div className='grid md:grid-cols-12 gap-3 md:h-[70vh]'>
                <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden '>
                    {
                        data.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
                <div className='card1 col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden '>
                    {
                        data1.map(item => <NewsCardTwo
                            key={item.id}
                            item={item}
                        ></NewsCardTwo>)
                    }
                </div>
                <div className='card1 col-span-4 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden '>
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