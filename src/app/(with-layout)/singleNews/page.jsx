import React from 'react';
import fakeData from "@/utils/news.json";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiUser, BiSolidPaperPlane } from 'react-icons/bi'
import { PiShareFatFill } from 'react-icons/pi'
import Image from 'next/image';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import Headline from '@/components/miniComponents/Headline';

const singleNews = () => {
    const data = fakeData.slice(0, 1)[0];
    const socialShare = <>
        <div className='flex items-center gap-2 text-3xl text-white'>
            <BiLogoFacebook className='rounded-full bg-blue-600 ' ></BiLogoFacebook>
            <BiLogoLinkedin className='rounded-full text-blue-700'></BiLogoLinkedin>
            <BiLogoInstagram className='rounded-full text-indigo-600'></BiLogoInstagram>
            <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
            <PiShareFatFill className='rounded-full text-red-600'></PiShareFatFill>
        </div>
    </>;
    // console.log(data);  
    const data1 = fakeData.slice(0, 8);
    const relatedNewsData = fakeData.slice(0, 20)
    return (
        <div className='container mx-auto mt-5'>
            <div className='px-4  grid md:grid-cols-12 gap-8'>
                <div className='col-span-9'>
                    <h2 className='text-3xl font-semibold my-5 text-red-500'>Food</h2>
                    <h1 className='text-3xl'>{data.title}</h1>
                    <p className='my-1'>Author - Dhaka</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1>Update - {data.published_date}</h1>
                        </div>
                        {socialShare}
                    </div>
                    <div>
                        {/* image and description */}
                        <div>
                            <div className='my-5'>
                                <Image
                                    height={700}
                                    width={900}
                                    src={data.img}
                                    alt="Picture of the author"
                                    className='mx-auto'
                                ></Image>
                                <div className='w-[900px] mx-auto mt-1'>
                                    <h1>{data.title}</h1>
                                    <p className='italic'>Photo - Photo</p>
                                </div>
                            </div>
                            <div >
                                <p className='text-lg'>{data.description}</p>
                            </div>
                        </div>

                        {/* Comment */}
                        <div>
                            <div className="divider"></div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1 className='text-2xl'>Comment</h1>
                                </div>
                                {socialShare}
                            </div>
                            <div className="divider"></div>
                            <div className='flex justify-end'>
                                <h1 className='text-lg'>Name</h1>
                            </div>
                            <div className="divider"></div>
                            <div className='flex items-center gap-5'>
                                <Image className='rounded-full' src={"https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={40} width={40} alt='user photo ' />
                                <input type="text" placeholder='Write your comment!' className='border flex-1 px-5 py-2 rounded focus:outline-none' />
                            </div>
                            <div className='flex justify-end mt-3'>
                                <button className='bg-cyan-500 text-white px-2 py-1 rounded flex items-center gap-1'> <BiSolidPaperPlane />Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card one and billboard */}
                <div className='col-span-3'>
                    <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden'>
                        {
                            data1.map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                    <div>
                        <Image
                            height={550}
                            width={400}
                            src="https://i.ibb.co/rMrqg6z/pexels-jessica-michaelson-1672100.jpg"
                            alt='Ad'
                        >

                        </Image>
                    </div>

                </div>
            </div>

            {/* related news */}
            <div className='my-12'>
                {/* <h1 className='text-2xl my-3'>Read more about politics</h1> */}
                <Headline headline={"Read more about politics"} />
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        relatedNewsData.map(item => <NewsCardFour
                            key={item.id}
                            item={item}
                        ></NewsCardFour>)
                    }
                </div>
            </div>
        </div>

    );
};

export default singleNews;