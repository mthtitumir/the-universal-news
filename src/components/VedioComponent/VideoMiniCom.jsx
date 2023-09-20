import { GetAllVideosFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';
import React from 'react';
const  VideoMiniCom = async () => {

    const allVideos = await GetAllVideosFromDB();
   
    return (
        <div>
            {
                    allVideos?.map(singleData => <div
                    key={singleData?.videoId} className="card gap-3 card-side rounded-none px-3 md:px-0 border hover:shadow-md">
                    <div className='relative z-[1000]'>   
                    <Image width={460} height={510} src={`https://i.ytimg.com/vi/${singleData?.videoId}/hqdefault.jpg`} alt='banner' />
                        <div className='absolute top-0 right-0 px-2 py-1 bg-black bg-opacity-70'>
                        </div>
                    </div>
                   
                </div> )
                }
        </div>
    );
};

export default VideoMiniCom;
