import Link from 'next/link';
import React from 'react';

const NewsCardOne = ({ item }) => {

// console.log(item);
    return (
        <div className=''>
            <Link href={`/news/single-news/${item?._id}`}><h1 className='leading-6'>{item?.title}</h1></Link>
            <div className="bg-black my-2 h-[1px]"></div>
        </div>
    );
};

export default NewsCardOne;