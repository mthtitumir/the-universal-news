import Headline from '../miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardTwo from '@/components/newsCards/NewsCardTwo';
import NewsCardFour from '@/components/newsCards/NewsCardFour';

const CategoryDisplay = ({ data }) => {
    return (
        <div className='c-auto'>
            {/* category banner */}
            <div className='mt-5 '>
                <div className='grid grid-col-3 md:grid-cols-12 gap-5 md:h-[70vh]'>
                    <div className='card1 md:col-span-6 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden'>
                        {
                            data?.slice(2, 5).map(item => <NewsCardTwo
                                key={item.id}
                                item={item}
                            ></NewsCardTwo>)
                        }
                    </div>

                    <div className='card1 md:col-span-3 overflow-y-scroll overflow-x-hidden'>
                        {
                            data?.slice(1, 4).map(item => <NewsCardFour
                                key={item.id}
                                item={item}
                            ></NewsCardFour>)
                        }
                    </div>
                    <div className='card1 md:col-span-3 overflow-y-scroll overflow-x-hidden'>
                        {
                            data?.map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                </div>
            </div>

            {/* Related Category */}
            <div className='my-12 '>
                <Headline headline={"Related News"} path={""} />
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                    {
                        data.map(item => <NewsCardFour
                            key={item.id}
                            item={item}
                        ></NewsCardFour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryDisplay;