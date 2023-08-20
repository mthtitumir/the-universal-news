import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { PiShareFatFill } from 'react-icons/pi';
import Image from 'next/image';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import Headline from "@/components/miniComponents/Headline";
import HandleComment from "@/components/miniComponents/HandleComment";
import { categories } from "@/hooks/useCategories";
import { singleNews } from '@/hooks/useSingleNews';

const SingleNews = async ({ params }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = params?.id;
    const data = await singleNews(id);
    const { _id, img, title, description, category, author, published_date, comments } = data;
    const categoryData = await categories(category);

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
    const data1 = categoryData.slice(0, 8);
    const relatedNewsData = categoryData.slice(0, 20)
    return (
        <div className='container mx-auto mt-5'>
            <div className=' grid md:grid-cols-12 gap-8'>
                <div className='col-span-9'>
                    <h2 className='text-3xl font-semibold my-5 text-cyan-500'>{category.toUpperCase()}</h2>
                    <h1 className='text-3xl'>{title}</h1>
                    <p className='my-1'>Author - {author}</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1>Update - {published_date}</h1>
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
                                    src={img}
                                    alt="Picture of the author"
                                    className='mx-auto'
                                ></Image>
                                <div className='w-[900px] mx-auto mt-1'>
                                    <h1>{data.title}</h1>
                                    <p className='italic'>Photo - {author}</p>
                                </div>
                            </div>
                            <div >
                                <p className='text-lg'>{description}</p>
                            </div>
                        </div>

                        {/* Comment */}
                        <div>
                            <HandleComment id={_id} comments={comments} socialShare={socialShare} />
                        </div>
                    </div>
                </div>
                {/* Related news and billboard */}
                <div className='col-span-3'>
                    <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden'>
                        {
                            data1.map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                    {/* billboard */}
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

export default SingleNews;