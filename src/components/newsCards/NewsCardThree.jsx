import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCardThree = ({ item }) => {
    return (
        <div className="card gap-3 card-side rounded-none px-3 md:px-0 border hover:shadow-md">
            <div className='w-1/3 relative'>
                <Image width={460} height={510} src={item?.img} alt='banner' />
                <div className='absolute top-0 right-0 px-2 py-1 bg-black bg-opacity-70'>
                    <h1 className='text-white text-xs'>{item?.category.toUpperCase()}</h1>
                </div>
            </div>
            <div className="w-2/3  p-1">
               <h2 className="text-lg title hover:underline"> <Link href={`/news/${item?.category}/${item?.subcategory}/${item?._id}`}>{item?.title.slice(0, 28)}...</Link></h2>
                <p className='my-1 text-sm'>{item?.published_date}</p>
            </div>
        </div>
    );
};

export default NewsCardThree;