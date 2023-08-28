import Image from 'next/image';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import Headline from "@/components/miniComponents/Headline";
import HandleComment from "@/components/CommentCompos/HandleComment";
import SocialShare from '@/components/miniComponents/SocialShare';
import { GetCategoryData, GetSingleNews } from '@/services/GetAllNews';

const SingleNews = async ({ params }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = params?.id;
    const data = await GetSingleNews(id);
    // console.log(data);
    const { img, _id, title, description, category, author, published_date, comments } = data;
    const categoryData = await GetCategoryData(category);

    // console.log(data);  
    const data1 = categoryData.slice(0, 8);
    const relatedNewsData = categoryData.slice(0, 20)
    return (
        <div className='container mx-auto mt-5'>
            <div className=' grid md:grid-cols-12 gap-8 px-3'>
                <div className='md:col-span-9'>
                    <h2 className='text-2xl md:text-3xl font-semibold my-3 text-cyan-500'>{category.toUpperCase()}</h2>
                    <h1 className='text-2xl md:text-3xl'>{title}</h1>
                    <p className='my-1 text-sm md:text-base'>Author - {author}</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-sm md:text-base'>Update - {published_date}</h1>
                        </div>
                        <SocialShare />
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
                                <div className='mx-auto mt-2'>
                                    <h1>{data.title}</h1>
                                    <p className='italic text-sm'>Photo - {author}</p>
                                </div>
                            </div>
                            <div >
                                <p className='text-lg'>{description.repeat(10).length>500?description.repeat(10).split(0,501):description.repeat(10)}</p>
                            </div>
                        </div>

                        {/* Comment */}
                        <div>
                            <HandleComment id={_id} comments={comments} />
                        </div>
                    </div>
                </div>
                {/* Related news and billboard */}
                <div className='md:col-span-3'>
                    <div className='flex flex-col gap-3'>
                        {/* related news  */}
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