import Link from "next/link";
import React from "react";

const NewsCardOne = ({ item }) => {

// console.log(item);
    return (
        <div className='px-3 md:px-0  mb-2'>
            <Link href={`/news/${item?.category}/${item?.subcategory}/${item?._id}`}><h1 className='leading-5 border px-3 py-2 text-lg hover:shadow'>{item?.title.slice(0,30)}...</h1></Link>
            {/* <div className="bg-black my-2 h-[1px]"></div> */}
        </div>
    );
};

export default NewsCardOne;
