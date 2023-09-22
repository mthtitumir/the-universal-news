import { GetAllVideosFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const VideoMiniCom = async () => {

    const allVideos = await GetAllVideosFromDB();

    return (
        <div className='flex flex-col gap-3'>
            {
                allVideos?.map(singleData => <div key={singleData?.videoId} className="card gap-3 rounded-lg card-side px-3 md:px-0 border hover:shadow-md">
                    <div className='w-1/3'>
                        <Image className='rounded-lg' width={460} height={510} src={`https://i.ytimg.com/vi/${singleData?.videoId}/hqdefault.jpg`} alt='banner' />
                    </div>
                    <div className="w-2/3  p-1">
                        <div className="flex items-center mt-3">
                            <div>
                                <h2 className="text-lg title hover:underline"> <Link href={`/videos/${singleData?.videoId}`}>{singleData?.title.slice(0, 28)}...</Link></h2>
                                <p className='my-1 text-sm'>{singleData?.channelTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default VideoMiniCom;
