import Headline from '../miniComponents/Headline';
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardTwo from '@/components/newsCards/NewsCardTwo';
import NewsCardFour from '@/components/newsCards/NewsCardFour';

const CategoryDisplay = ({ data }) => {
    return (
        <>
            {/* category banner */}
            <div className='mt-5 '>
                <div className='grid md:grid-cols-12 gap-5'>
                    <div className='card1 col-span-6 flex flex-col gap-3 '>
                        {
                            data.slice(2, 3).map(item => <NewsCardTwo
                                key={item.id}
                                item={item}
                            ></NewsCardTwo>)
                        }
                    </div>

                    <div className='card1 col-span-3 '>
                        {
                            data.slice(1, 2).map(item => <NewsCardFour
                                key={item.id}
                                item={item}
                            ></NewsCardFour>)
                        }
                    </div>
                    <div className='card1 col-span-3'>
                        {
                            data.slice(0, 7).map(item => <NewsCardOne
                                key={item.id}
                                item={item}
                            ></NewsCardOne>)
                        }
                    </div>
                </div>
            </div>


            {/* Related Category */}
            <div className='my-12'>
                <Headline headline={"Related News"} />
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        data.map(item => <NewsCardFour
                            key={item.id}
                            item={item}
                        ></NewsCardFour>)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryDisplay;