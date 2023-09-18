import NewsCardThree from '@/components/newsCards/NewsCardThree';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import Headline from '@/components/miniComponents/Headline';
import { GetAllNews, GetCategoryData } from "@/services/GetAllNews";

const AllNews =async () => {
    const foodData = await GetCategoryData("food");
    const techData = await GetCategoryData("Technology");
    const sportsData = await GetCategoryData("sports");
    const scienceData = await GetCategoryData("science");
    const trending = await GetAllNews();
    const data1 = foodData?.slice(3, 6);
    const data2 = techData?.slice(3, 6);
    const data3 = sportsData?.slice(3, 6);
    const data4 = scienceData?.slice(4, 7);
    const data5 = trending?.slice(1, 30);

    return (
        <div className='grid md:grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <div>
                    <Headline headline={"Food"} seeMore={"See More"} path={"/news/food"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data1?.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Headline headline={"Technology"} seeMore={"See More"} path={"/news/Technology"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data2?.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <div>
                    <Headline headline={"Sports"} seeMore={"See More"} path={"/news/sports"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data3?.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Headline headline={"Science"} seeMore={"See More"} path={"/news/science"} />
                    <div className='flex flex-col gap-3'>
                        {
                            data4?.map(item => <NewsCardThree
                                key={item.id}
                                item={item}
                            ></NewsCardThree>)
                        }
                    </div>
                </div>
            </div>
            <div className='row-span-1 col-span-4 '>
                <Headline headline={"Trending"} seeMore={"See More"} path={""} />
                <div className='mt-5 h-screen overflow-y-scroll overflow-x-hidden card1'>
                    {
                        data5?.map(item => <NewsCardOne
                            key={item.id}
                            item={item}
                        ></NewsCardOne>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllNews;