import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardTwo from '@/components/newsCards/NewsCardTwo';
import fakeData from "@/utils/news.json"
import NewsCardFour from '@/components/newsCards/NewsCardFour';
import HandleModal from '@/components/miniComponents/HandleModal';

const Sports = () => {
    const data = fakeData.slice(0, 6);
    const data1 = fakeData.slice(0, 1);
    const data2 = fakeData.slice(0, 10);
    const relatedNewsData = fakeData.slice(0, 8);
    return (
        <div className=' container mx-auto'>
            {/* Category Navbar */}
            <div className='flex items-center gap-7'>
                <HandleModal />
                <h2 className='text-2xl font-semibold'>Food</h2>
                <div>
                    <ul className='flex justify-start gap-4 py-5 '>
                        <li>Chines</li>
                        <li>Japanese</li>
                        <li>Italian</li>
                        <li>Indian</li>
                        <li>South Korean</li>
                    </ul>
                </div>
            </div>



            {/* Category Banner */}
            <div className='mt-5 '>
                <div className='grid md:grid-cols-12 gap-5 md:h-[70vh]'>
                    <div className='card1 col-span-6 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden '>
                        {
                            data1.map(item => <NewsCardTwo
                                key={item.id}
                                item={item}
                            ></NewsCardTwo>)
                        }
                    </div>
                    <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden '>
                        {
                            data1.map(item => <NewsCardFour
                                key={item.id}
                                item={item}
                            ></NewsCardFour>)
                        }
                    </div>


                    <div className='card1 col-span-3 '>
                        {
                            data.map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                </div>
            </div>




            {/* Related Category */}
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

export default Sports;