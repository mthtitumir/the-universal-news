import Headline from '@/components/miniComponents/Headline';
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import NewsCardThree from '@/components/newsCards/NewsCardThree';
import { GetCategoryData } from '@/services/GetAllNews'

const HomeFood = async () => {
    const foodData = await GetCategoryData('food');
    return (
        <div className=''>
            <Headline headline={"Foods & Recipes"} seeMore={"See More"} path={"/news/food"} />
            <div className='grid md:grid-cols-12 gap-2'>
                <div className='md:col-span-4 flex flex-col gap-2 scroll vly'>
                    {
                        foodData?.map(food => <NewsCardThree key={food?._id} item={food} />)
                    }
                </div>
                <div className="md:col-span-8 grid md:grid-cols-2 gap-2 scroll">
                    {
                        foodData?.map(food => <NewsCardFour key={food?._id} item={food} /> )
                    }
                </div>
                 
            </div>
        </div>
    )
}

export default HomeFood