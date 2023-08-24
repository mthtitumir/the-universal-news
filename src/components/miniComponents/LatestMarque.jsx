import { allNews } from '@/hooks/useAllNews';
import React from 'react';
import Marquee from "react-fast-marquee";

const LatestMarque = async () => {
    const data = await allNews();
    const myData = data.slice(0, 20);

    return (
        <div className='container mx-auto flex justify-center items-center my-5 bg-slate-100 rounded-sm p-2'>
            <button className='bg-cyan-500 rounded px-2 py-1 text-white'>Latest</button>
            <Marquee className="text-red-600 " speed={90}>
                {
                    myData.map(data => (<h1 key={data._id} className='px-2 text-sm tracking-wide'>{data?.title}</h1>))
                }
            </Marquee>
        </div>
    );
};

export default LatestMarque;