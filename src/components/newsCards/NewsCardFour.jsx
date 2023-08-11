import Image from 'next/image';
import React from 'react';

const NewsCardFour = ({ item }) => {
    console.log(item);
    return (
        <div className="card w-full">
            <div className='w-1/3 relative'>
                <Image width={460} height={510} src={item?.img} alt='banner' />
                <div className='absolute top-0 right-0 px-4 py-1 bg-white bg-opacity-70'>
                    <h1 className='text-white'>{item?.category}</h1>
                </div>
            </div>
            <div className="mt-3">
                <h2 className="text-xl">{item?.title}</h2>
                <p>{item?.published_date}</p>
            </div>
        </div>
    );
};

export default NewsCardFour;