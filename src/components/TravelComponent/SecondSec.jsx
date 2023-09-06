import React from 'react';
import data from '../../utils/travel.json'
import NewsCardTwo from '../newsCards/NewsCardTwo';
import Image from 'next/image';
import NewsCardFour from '../newsCards/NewsCardFour';


const SecondSec = () => {
    const allTravelData = data;
    const travelData = data.slice(0, 1);
    const travelData2 = data.slice(0, 2);

    // console.log(travelData)
    return (
        <>
            <h2 className='text-center text-3xl font-semibold  mt-20'>Find Your Destination</h2>
            <div className='flex-row md:flex gap-8 my-7 w-[100%]'>

                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[70%]">
                    {travelData.map((item) => (
                        <NewsCardTwo key={item.id} item={item}></NewsCardTwo>
                    ))}
                </div>


                <div className='md:w-[30%]'>
                    {
                        travelData2.map(item => <NewsCardFour
                            key={item.id}
                            item={item}
                        ></NewsCardFour>)
                    }
                </div>
            </div>

            <h2 className='text-center text-3xl font-semibold my-9'>More Place</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    allTravelData.map(item=><NewsCardFour
                    key={item.id}
                    item={item}   
                    ></NewsCardFour>)
                }
            </div>

        </>
    );
};

export default SecondSec;