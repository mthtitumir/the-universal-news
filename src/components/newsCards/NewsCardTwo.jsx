import Image from 'next/image';
import React from 'react';

const NewsCardTwo = () => {
    return (
        <div className='relative'>
            <Image height="460" width="510" src="https://i.ibb.co/rd3zPmp/trump.jpg" alt='banner' />
            <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-[510px]'>
                <h1 className='text-white text-xl'>Title</h1>
                <p>Date</p>
            </div>
        </div>
    );
};

export default NewsCardTwo;