import VideoMiniCom from '@/components/VedioComponent/videoMiniCom';
import { GetSingleVideoFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';

const SingleVideo = async ({ params }) => {
    const data = await GetSingleVideoFromDB(params?.videoId);   
    return (
        <div className='grid md:grid-cols-10 c-auto my-10' >
            <div className='md:col-span-7'>
                <div>
                    <iframe className='w-full h-full aspect-video ' src={`https://www.youtube.com/embed/${params?.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='flex items-center gap-4 py-8 w-full'>
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

                        </div>

                    </div>
                </div>
            </div>
            <div className='md:col-span-3'>
                <VideoMiniCom></VideoMiniCom>
            </div>

        </div>
    );
};

export default SingleVideo;