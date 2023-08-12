import Image from 'next/image';
import React from 'react';

const NewsCardThree = ({ item }) => {
    return (
        <div className="card card-side rounded-none">
            <div className='w-1/3 relative'>
                <Image width={460} height={510} src={item?.img} alt='banner' />
                <div className='absolute top-0 right-0 px-4 py-1 bg-black bg-opacity-70'>
                    <h1 className='text-white'>{item?.category}</h1>
                </div>
            </div>
            <div className="w-2/3 ml-2">
                <h2 className="text-base underline">{item?.title.slice(0, 58)}...</h2>
                <p className='my-1 text-sm'>{item?.published_date}</p>
            </div>
        </div>
    );
};

export default NewsCardThree;