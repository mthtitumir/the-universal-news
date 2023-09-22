import SocialShare from '@/components/miniComponents/SocialShare';
import Image from 'next/image';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import { GetAllPhotosFromDB, GetSinglePhotosFromDB } from '@/services/GetAllNewsFromDB';

const SinglePhotoComponent =async ({ params }) => {
    const booksDetails = await GetSinglePhotosFromDB(params?.id);
    const { title, images, number, captions, description, published_date, author, authorEmail, tags, likes, comments, slideImage } = booksDetails;
    const allTravelData = await GetAllPhotosFromDB();
    return (
        <div className='c-auto'>
            <Image
                height={500}
                width={800}
                src='https://i.ibb.co/2n70cWL/ad.png'
                alt='add'
                className='my-10 w-[900px] mx-auto object-cover'
            ></Image>
            <hr />

            <div className='flex-row md:flex c-auto gap-4'>

                <div className='md:w-[70%]'>
                    <h2 className='text-xl underline text-blue-600 mb-4 pl-4 pt-4'>{title}</h2>
                    <div className='flex gap-3 text-4xl mb-8 ml-4'>
                        <h2 className=''>{title}</h2>
                        <h2>{published_date}</h2>
                    </div>
                    <div className='flex justify-between border-b-2 border-gray-300 pb-7'>
                        <h2 className='text-gray-400 text-base ml-4'>Publish Date: {published_date}</h2>
                        <SocialShare></SocialShare>
                    </div>

                    <div className='px-16 my-4'>
                        <div className='border-b-2 border-gray-300 pb-1'>
                            <h2 className='text-xl p-1 border-2 border-red-600 rounded-xl w-[80px] text-center mt-5 mb-7'>{number[0]} / 5</h2>
                            <Image
                                height={500}
                                width={900}
                                src={images[0]}
                                alt='photo image'
                                className='w-[700px] object-cover'
                            ></Image>
                            <p className='py-2'>{description.repeat(4).length > 500 ? description.repeat(4).split(0, 501) : description.repeat(4)} <span className='text-gray-500'> Author: {author}</span></p>
                        </div>

                        <div className='border-b-2 border-gray-300 pb-1'>
                            <h2 className='text-xl p-1 border-2 border-red-600 rounded-xl w-[80px] text-center mt-5 mb-7'>{number[1]} / 5</h2>
                            <Image
                                height={500}
                                width={900}
                                src={images[1]}
                                alt='photo image'
                                className='w-[700px] object-cover'
                            ></Image>
                            <p className='py-2'>{description.repeat(4).length > 500 ? description.repeat(4).split(0, 501) : description.repeat(4)} <span className='text-gray-500'> Author: {author}</span></p>
                        </div>

                        <div className='border-b-2 border-gray-300 pb-1'>
                            <h2 className='text-xl p-1 border-2 border-red-600 rounded-xl w-[80px] text-center mt-5 mb-7'>{number[2]} / 5</h2>
                            <Image
                                height={500}
                                width={900}
                                src={images[2]}
                                alt='photo image'
                                className='w-[700px] object-cover'
                            ></Image>
                            <p className='py-2'>{description.repeat(4).length > 500 ? description.repeat(4).split(0, 501) : description.repeat(4)} <span className='text-gray-500'> Author: {author}</span></p>
                        </div>

                        <div className='border-b-2 border-gray-300 pb-1'>
                            <h2 className='text-xl p-1 border-2 border-red-600 rounded-xl w-[80px] text-center mt-5 mb-7'>{number[3]} / 5</h2>
                            <Image
                                height={500}
                                width={900}
                                src={images[3]}
                                alt='photo image'
                                className='w-[700px] object-cover'
                            ></Image>
                            <p className='py-2'>{description.repeat(4).length > 500 ? description.repeat(4).split(0, 501) : description.repeat(4)} <span className='text-gray-500'> Author: {author}</span></p>
                        </div>

                        <div className='border-b-2 border-gray-300 pb-1'>
                            <h2 className='text-xl p-1 border-2 border-red-600 rounded-xl w-[80px] text-center mt-5 mb-7'>{number[4]} / 5</h2>
                            <Image
                                height={500}
                                width={900}
                                src={images[4]}
                                alt='photo image'
                                className='w-[700px] object-cover'
                            ></Image>
                            <p className='py-2'>{description.repeat(4).length > 500 ? description.repeat(4).split(0, 501) : description.repeat(4)} <span className='text-gray-500'> Author: {author}</span></p>
                        </div>
                    </div>

                </div>

                <hr />
                <div className='md:w-[30%]'>
                </div>
            </div>

            <Image
                height={500}
                width={800}
                src='https://i.ibb.co/XkrCQ5H/How-to-Explain-Banner-Ads-to-Anyone-5.webp'
                alt='add'
                className='mt-10 w-[900px] mx-auto object-cover'
            ></Image>


            {/* <h1 className='text-2xl mt-16 font-semibold text-center '>More relevant News</h1>
            <div className='grid md:grid-cols-3 gap-5 my-8'>
                {
                    allTravelData?.map(item => <NewsCardFour
                        key={item.id}
                        item={item}
                    ></NewsCardFour>)
                }
            </div> */}
        </div>
    );
};

export default SinglePhotoComponent;