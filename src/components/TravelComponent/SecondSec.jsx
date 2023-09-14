import React from 'react';
import data from '../../utils/travel.json'
import NewsCardTwo from '../newsCards/NewsCardTwo';
import Image from 'next/image';
import NewsCardFour from '../newsCards/NewsCardFour';
import Link from 'next/link';


const SecondSec = () => {
    const allTravelData = data;
    const travelData = data.slice(2, 3);
    const travelData2 = data.slice(6, 8);

    return (
        <>
            <h2 className='text-center text-3xl font-semibold  mt-20'>Find Your Destination</h2>
            <div className='flex-row md:flex gap-8 my-7 w-[100%] mb-16'>
                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[70%]">
                    {travelData.map((item) => (
                        <div className='relative' key={item.id}>
                            <Link href={`/travel/${item?.id}`}  >
                                <Image height="460" width="526" src={item?.img} className='w-full' alt='banner' />
                            </Link>
                            <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                <p className='text-white text-sm mt-2'>{item?.description}</p>
                                <p className='text-white text-sm mt-2'>{item?.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='md:w-[30%]'>
                    {
                        travelData2.map(item =>
                            <Link href={`/travel/${item?.id}`} key={item.id}
                            >
                                <NewsCardFour
                                    item={item}
                                ></NewsCardFour>
                            </Link>
                        )
                    }
                </div>
            </div >
            < div className='my-7' >
                <Image
                    height={100}
                    width={1100}
                    src="https://i.ibb.co/s1vhk7c/Untitled-design-1.png"
                    alt='travel ads'
                    className='mx-auto'
                ></Image>
            </div >
            <h2 className='text-center text-3xl font-semibold my-9 mt-20'>More Place</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* <p className='text-white text-sm mt-2'>{item?.description}</p>
                <p className='text-white text-sm mt-2'>{item?.date}</p> */}
                {
                    allTravelData.map(item => <Link href={`/travel/${item?.id}`} key={item.id}>
                        <NewsCardFour
                            item={item}
                        ></NewsCardFour>
                    </Link>)
                }
            </div>

        </>
    );
};

export default SecondSec;