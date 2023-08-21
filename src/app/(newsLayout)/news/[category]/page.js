import NewsCardOne from "@/components/newsCards/NewsCardOne";
import NewsCardTwo from "@/components/newsCards/NewsCardTwo";
import NewsCardFour from "@/components/newsCards/NewsCardFour";
import { categories } from "@/hooks/useCategories";
import Headline from "@/components/miniComponents/Headline";

const category = async ({ params }) => {
  const categoryData = await categories(params.category);
  const data = categoryData.slice(0, 10);
  const data1 = categoryData.slice(0, 10);
  const relatedNewsData = categoryData.slice(0, 8);

  return (
    <div className=" container mx-auto mt-5">
      {/* Category Navbar */}
      <div className="flex items-center gap-7">
        <h2 className="text-3xl font-semibold text-cyan-500">
          {params.category.toUpperCase()}
        </h2>
        <div>
          <ul className=" flex justify-start gap-4 py-5  ">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
            <li>Biology</li>
          </ul>
        </div>
      </div>

      {/* Category Banner */}
      <div className="mt-5 ">
        <div className="grid md:grid-cols-12 gap-5 md:h-[70vh]">
          <div className="card1 col-span-6 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
            {data1.map((item) => (
              <NewsCardTwo key={item.id} item={item}></NewsCardTwo>
            ))}
          </div>

          <div className="card1 col-span-3 overflow-y-scroll overflow-x-hidden ">
            {data1.map((item) => (
              <NewsCardFour key={item.id} item={item}></NewsCardFour>
            ))}
          </div>
          <div className="card1 col-span-3 ">
            {data.map((item) => (
              <NewsCardOne key={item.id} item={item}></NewsCardOne>
            ))}
          </div>
        </div>
      </div>

      {/* Related Category */}
      <div className="my-12">
        <Headline headline={"Related News"} />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedNewsData.map((item) => (
            <NewsCardFour key={item.id} item={item}></NewsCardFour>
          ))}
        </div>
      </div>
    </div>
  );
};

export default category;
