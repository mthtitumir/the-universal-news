import React from 'react';
import Marquee from "react-fast-marquee";

const LatestMarque = () => {
    return (
        <div className='flex justify-center items-center mx-20 my-2 bg-slate-100 rounded-sm p-2'>
            <button className='bg-cyan-500 rounded px-2 py-1 text-white'>Latest</button>
            <Marquee className="text-red-600 " speed={100}>
                <h1 className='px-3'>Shakib Al Hassan won the Cricket world cup 2023 in india </h1>    
            </Marquee>
        </div>
    );
};

export default LatestMarque;