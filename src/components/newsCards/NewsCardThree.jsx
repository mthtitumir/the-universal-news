import Image from 'next/image';
import React from 'react';

const NewsCardThree = () => {
    return (
        <div className="card card-side">
            <div className='w-1/3 relative'>
                <Image width={460} height={510} src="https://i.ibb.co/rd3zPmp/trump.jpg"  alt='banner' />
                <div className='absolute top-0 right-0 px-4 py-1 bg-black bg-opacity-70'>
                <h1 className='text-white'>category</h1>
            </div>
            </div>
            <div className="w-2/3 ml-3">
                <h2 className="text-2xl text-white">New movie is released!</h2>
                <p>Published on Date</p>
            </div>
        </div>
    );
};

export default NewsCardThree;