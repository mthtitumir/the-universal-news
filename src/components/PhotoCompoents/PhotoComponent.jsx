import NewsCardOne from '../newsCards/NewsCardOne';
import news from '@/utils/photo.json'
import PhotoSlide from './PhotoSlide';
import PhotoSlider2 from './photoSlider2';
import photoData from '../../utils/photo.json'
import Image from 'next/image';
import Link from 'next/link';
import Headline from '../miniComponents/Headline';

const PhotoComponent = () => {
    const photo = photoData.slice(0, 1);
    const photo2 = photoData;
    const photo3 = photoData.slice(1, 2);
    const photo4 = photoData.slice(2, 3);
    const photos = news.slice(3, 10);

    return (
        <div>
            <Headline headline={"Photos"} path={""} />
            {/* 1st section */}
            <div className='flex-row md:flex gap-8 my-7 w-[100%] border-b-2 border-gray-300 pb-6'>
                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[70%] ">
                    {photo.map((item) => (
                        <div key={item.id} className='relative'>
                            <Link href={`/photo/${item?.id}`}>
                                <Image height="460" width="526" src={item?.img} className='w-full' alt='banner' />
                            </Link>
                            <div className='absolute bottom-0 p-3 bg-black bg-opacity-70 w-full'>
                                <p className='text-white text-sm mt-2'>{item?.captions.slice(0, 30)}</p>
                            </div>
                        </div>
                    ))}
                    {photo.map((item) => (
                        <h1
                            key={item.id}
                            className='text-4xl font-semibold my-3'>{item.title}
                        </h1>
                    ))}
                    {photo.map((item) => (
                        <p key={item.id} className='text-base text-gray-500'>{item.published_date}</p>
                    ))}
                </div>
                <div className="card1 md:col-span-3 overflow-y-scroll overflow-x-hidden md:w-[30%]">
                    {photo2.map((item) => (
                        <NewsCardOne key={item.id} item={item}></NewsCardOne>
                    ))}
                </div>
            </div>

            {/* Second Section */}
            <div className='border-b-2 border-gray-300 pb-3'>
                <PhotoSlide text={"A Glimpse"} seeMore={""} path={''}></PhotoSlide>
            </div>

            {/* 3rd section */}
            <Headline headline={"Best Clicked Photos"} path={""} />
            <div className='flex-row md:flex gap-3 my-7 mb-9 w-[100%] border-b-2 border-gray-300 pb-4'>
                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[60%] ">
                    {photo3.map((item) => (
                        <Link key={photo.id} href={`/photo/${item?.id}`}>
                            <div className='relative '>
                                <Image height="460" width="526" src={item?.images[0]} className='w-full' alt='banner' />
                                <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                    <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                    <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>

                <div className='md:w-[40%]'>
                    <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden   sm:mt-4 md:mt-0">
                        {photo3.map((item) => (
                            <Link key={item.id} href={`/photo/${item?.id}`}>
                                <div className='relative '>
                                    <Image height="460" width="526" src={item?.images[1]} className='w-full' alt='banner' />
                                    <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                        <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                        <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className='flex gap-3 mt-3 '>
                        <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden  ">
                            {photo4.map((item) => (
                                <Link key={item.id} href={`/photo/${item?.id}`}>
                                    <div className='relative '>
                                        <Image height="460" width="526" src={item?.images[0]} className='w-full' alt='banner' />
                                        <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                            <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                            <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                        </div>
                        <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden  ">
                            {photo4.map((item) => (
                                <Link key={item.id} href={`/photo/${item?.id}`}>
                                    <div className='relative '>
                                        <Image height="460" width="526" src={item?.images[1]} className='w-full' alt='banner' />
                                        <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                            <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                            <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th section */}
            <Headline headline={"World Best Photos"} path={""} />
            <PhotoSlider2></PhotoSlider2>

            {/* 5th section */}
            <div className='border-t-2 border-gray-300 mt-4 pt-8'>
                <div className="flex gap-3 w-full">
                    <div className="card1 md:col-span-4 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
                        {photos.map((item) => (
                            <Link key={item?.id} href={`/photo/${item?.id}`}>
                                <div className="card gap-3 card-side rounded-none px-3 md:px-0 border hover:shadow-md">
                                    <div className='w-1/3 relative'>
                                        <Image width={460} height={510} src={item?.img} alt='banner' />
                                        <div className='absolute top-0 right-0 px-2 py-1 bg-black bg-opacity-70'>
                                            <h1 className='text-white text-xs'>{item?.category.toUpperCase()}</h1>
                                        </div>
                                    </div>
                                    <div className="w-2/3  p-1">
                                        <h2 className="text-lg title hover:underline">{item?.title.slice(0, 28)}...</h2>
                                        <p className='my-1 text-sm'>{item?.published_date}</p>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                    <div className="card1 md:col-span-4 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
                        {photos.map((item) => (
                            <Link key={item?.id} href={`/photo/${item?.id}`}>
                                <div className="card gap-3 card-side rounded-none px-3 md:px-0 border hover:shadow-md">
                                    <div className='w-1/3 relative'>
                                        <Image width={460} height={510} src={item?.img} alt='banner' />
                                        <div className='absolute top-0 right-0 px-2 py-1 bg-black bg-opacity-70'>
                                            <h1 className='text-white text-xs'>{item?.category.toUpperCase()}</h1>
                                        </div>
                                    </div>
                                    <div className="w-2/3  p-1">
                                        <h2 className="text-lg title hover:underline">{item?.title.slice(0, 28)}...</h2>
                                        <p className='my-1 text-sm'>{item?.published_date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoComponent;