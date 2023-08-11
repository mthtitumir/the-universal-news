import Image from 'next/image';
import React from 'react';

const NewsCardThree = ({ item }) => {
    return (
        <div className="card card-side bg-gray-100 rounded-none my-4">
            <div className='w-1/3 relative'>
                <Image width={460} height={510} src={item?.img} alt='banner' />
                <div className='absolute top-0 right-0 px-4 py-1 bg-black bg-opacity-70'>
                    <h1 className='text-white'>{item?.category}</h1>
                </div>
            </div>
            <div className="w-2/3 ml-3">
                <h2 className="text-xl underline ">{item?.text}!</h2>
                <p>{item?.published_date}</p>
            </div>
        </div>
    );
};

export default NewsCardThree;