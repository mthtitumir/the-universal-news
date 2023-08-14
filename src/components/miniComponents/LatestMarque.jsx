import React from 'react';
import Marquee from "react-fast-marquee";

const LatestMarque = () => {
    return (
        <div className='flex justify-center items-center mx-20 my-10 bg-slate-100 rounded-sm p-2'>
                <button className="py-3 px-4 bg-teal-600 text-white">Latest</button>
                <Marquee className="text-red-600 " speed={90}>
                    <h1 className='px-3'>In a shocking turn of events, an unprecedented heatwave is currently engulfing regions across multiple continents, setting new temperature records and raising concerns about the escalating impacts of climate change. Reports are pouring in of scorching temperatures exceeding historical averages by several degrees, with major cities grappling to provide relief to their residents. Meteorologists are attributing the heatwave to a confluence of climate patterns, warning that extreme weather events like this could become more frequent without urgent global action. Authorities are urging citizens to take precautions, stay hydrated, and avoid outdoor activities during peak heat hours. The situation is evolving rapidly, and experts are closely monitoring the development of this extraordinary climate event. Stay tuned for updates on this unfolding crisis.</h1>
                </Marquee>
            </div>
    );
};

export default LatestMarque;