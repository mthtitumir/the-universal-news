import Headline from "@/components/miniComponents/Headline";
import NewsCardFour from "@/components/newsCards/NewsCardFour";
import NewsCardTwo from "@/components/newsCards/NewsCardTwo";
import { GetCategoryData } from "@/services/GetAllNews"

const HomeSports = async () => {
    const data = await GetCategoryData("sports");
    return (
        <>
            <Headline headline={"Sports"} path={"/news/sports"} seeMore={"See More"} />
            <div className="grid md:grid-cols-12 gap-2">
                <div className="md:col-span-8 scroll flex flex-col gap-2">
                    {
                        data?.map(singleData => <NewsCardTwo key={singleData._id} item={singleData} />)
                    }
                </div>
                <div className="md:col-span-4 scroll flex flex-col gap-2">
                    {
                        data?.map(singleData => <NewsCardFour key={singleData._id} item={singleData} />)
                    }
                </div>
            </div>
        </>
    )
}

export default HomeSports