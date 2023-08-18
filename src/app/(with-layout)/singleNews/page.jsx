"use clint"
import fakeData from "@/utils/news.json";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiUser } from 'react-icons/bi'
import { PiShareFatFill } from 'react-icons/pi'
import Image from 'next/image';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import HandleComment from "@/components/miniComponents/HandleComment";

const singleNews = () => {

  
    const data = fakeData.slice(0, 1)[0];
    // console.log(data);  
    const data1 = fakeData.slice(0, 8);
    const relatedNewsData = fakeData.slice(0, 4)
    return (
        <div className='container mx-auto mt-5'>
            <div className='px-4  grid md:grid-cols-12 gap-8'>
                <div className='col-span-9'>
                    <h2 className='text-3xl font-semibold my-5'>Food</h2>
                    <h1 className='text-xl'>{data.title}</h1>
                    <p>Author - Dhaka</p>
                    <div className='flex justify-between'>
                        <div>
                            <h1>Update - {data.published_date}</h1>
                        </div>
                        <div className='flex items-center gap-2 text-3xl text-white'>
                            <BiLogoFacebook className='rounded-full bg-blue-600 ' ></BiLogoFacebook>
                            <BiLogoLinkedin className='rounded-full text-blue-700'></BiLogoLinkedin>
                            <BiLogoInstagram className='rounded-full text-indigo-600'></BiLogoInstagram>
                            <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
                            <PiShareFatFill className='rounded-full text-red-600'></PiShareFatFill>
                        </div>
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
                        <div className='flex justify-between items-center mt-8'>
                            <div>
                                <ul className='flex justify-start gap-4 py-5 '>
                                    <li>Comment</li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-2 text-3xl text-white'>
                                <BiLogoFacebook className='rounded-full bg-blue-600 ' ></BiLogoFacebook>
                                <BiLogoLinkedin className='rounded-full text-blue-700'></BiLogoLinkedin>
                                <BiLogoInstagram className='rounded-full text-indigo-600'></BiLogoInstagram>
                                <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
                                <PiShareFatFill className='rounded-full text-red-600'></PiShareFatFill>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BiUser className='text-5xl bg-slate-300 rounded-full p-3 '></BiUser>
                           <HandleComment />
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