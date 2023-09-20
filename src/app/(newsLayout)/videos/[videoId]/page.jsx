import NewsCardThree from '@/components/newsCards/NewsCardThree';
import React from 'react';


const SingleVideo = ({ params }) => {
    return (
        <div className='grid md:grid-cols-10 c-auto' >
            <div className='md:col-span-7'>
                <iframe className='w-full h-full aspect-video ' src={`https://www.youtube.com/embed/${params?.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='md:col-span-3'>
                <NewsCardThree></NewsCardThree>
            </div>

        </div>
    );
};

export default SingleVideo;