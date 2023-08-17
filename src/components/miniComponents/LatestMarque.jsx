import React from 'react';
import Marquee from "react-fast-marquee";

const LatestMarque = () => {
    return (
        <div className='flex justify-center items-center mx-20 my-2 bg-slate-100 rounded-sm p-2'>
            <Marquee className="text-red-600 " speed={100}>
                <h1 className='px-3'>Shakib Al Hassan won the Cricket world cup 2023 in india </h1>
            </Marquee>
        </div>
    );
};

export default LatestMarque;