import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCardFour = ({ item }) => {
    // console.log(item);
    return (
        <div className=" w-full">
            <div className='relative'>
                <Image width={460} height={256} src={item?.img} alt='banner' />
                <div className='absolute top-0 right-0 px-4 py-1 bg-black bg-opacity-70'>
                    <h1 className='text-white text-sm'>{item?.category.toUpperCase()}</h1>
                </div>
            </div>
            <div className="mt-3">
                <Link href={`/news/${item?.category}/${item?.subcategory}/${item?._id}`}><h2 className="text-lg font-medium hover:underline">{item?.title.slice(0, 70)}...</h2></Link>
                <p className='text-sm mt-2'>{item?.published_date}</p>
            </div>
        </div>
    );
};

export default NewsCardFour;