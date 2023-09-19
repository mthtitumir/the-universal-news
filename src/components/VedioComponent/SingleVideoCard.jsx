import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'

const SingleVideoCard = ({ data }) => {
    // console.log(data);
    return (
        <div className="border rounded-2xl  shadow-md hover:scale-105 duration-500">
            <Link href={`/videos/${data.videoId}`}><Image width={460} height={510} src={`https://i.ytimg.com/vi/${data?.videoId}/hqdefault.jpg`} alt='' /></Link>
            <div className='flex items-center gap-4'>
                <div className="avatar my-6 ml-4 pb-20">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                            src="https://i.ibb.co/3Mrx6Fg/blank-profile.webp"
                            alt="Avatar"
                            width={64}
                            height={64}
                        />
                    </div>
                </div>
                <div className='my-6'>
                    <h1 className='font-bold text-xl'>{data?.title}</h1>
                    <div className='flex items-center gap-1'>
                        <p>{data?.channelTitle}</p>
                        <BsCheckCircleFill className='text-blue-800'></BsCheckCircleFill>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleVideoCard;