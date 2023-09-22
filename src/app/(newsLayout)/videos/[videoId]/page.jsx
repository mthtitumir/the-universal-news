import VideoMiniCom from '@/components/VedioComponent/VideoMiniCom';
import { GetSingleVideoFromDB } from '@/services/GetAllNewsFromDB';
import Image from 'next/image';
import Link from 'next/link';

const SingleVideo = async ({ params }) => {
    const data = await GetSingleVideoFromDB(params?.videoId);
    return (
        <div className=' c-auto'>
            <div className='grid md:grid-cols-10 my-10 gap-3 px-16' >
                <div className='md:col-span-7'>
                    <div>
                        <iframe className='w-full h-full aspect-video rounded-lg' src={`https://www.youtube.com/embed/${params?.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='p-3 border rounded-lg mt-3'>
                        <div className=''>
                            <h1 className='font-semibold text-xl'>{data?.title}</h1>
                        </div>
                        <div className='my-5 flex justify-evenly items-center'>
                            <div className='flex items-center gap-4 w-full '>
                                <div className="avatar ">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image
                                            src="https://i.ibb.co/3Mrx6Fg/blank-profile.webp"
                                            alt="Avatar"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='text-lg font-semibold'>{data?.channelTitle}</p>
                                </div>
                            </div>
                            <div>
                                <Link href={`https://www.youtube.com/channel/${data?.channelId}`} ><button className='primary-btn bg-red-600'>Subscribe</button></Link>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg'>{data?.description}</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-3'>
                    <VideoMiniCom></VideoMiniCom>
                </div>

            </div>
        </div>
    );
};

export default SingleVideo;