import Headline from '../miniComponents/Headline'
import NewsCardOne from '@/components/newsCards/NewsCardOne';
import NewsCardTwo from '@/components/newsCards/NewsCardTwo';
import NewsCardFour from '@/components/newsCards/NewsCardFour';

const CategoryCom = ({ data, params }) => {
    const category = 'j';
    return (
        <><div className=' container mx-auto mt-5'>
            {/* Category Navbar */}
            <div className='flex items-center gap-7'>
                <h2 className='text-3xl font-semibold text-cyan-500'>{params.toUpperCase()}</h2>
                <div>
                    {/* <ul className=' flex justify-start gap-4 py-5  '>
                        {
                            subcategories.map((subCat, index) => <Link href={`/news/${params.category}/${subCat}`} key={index + 1}><li >{subCat.toUpperCase()}</li></Link>)
                        }
                    </ul> */}
                </div>
            </div>

            {/* category banner */}
            <div className='mt-5 '>
                <div className='grid md:grid-cols-12 gap-5 md:h-[100vh]'>
                    <div className='card1 col-span-6 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden '>
                        {
                            data.map(item => <NewsCardTwo
                                key={item.id}
                                item={item}
                            ></NewsCardTwo>)
                        }
                    </div>

                    <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden '>
                        {
                            data.map(item => <NewsCardFour
                                key={item.id}
                                item={item}
                            ></NewsCardFour>)
                        }
                    </div>
                    <div className='card1 col-span-3 overflow-y-scroll overflow-x-hidden'>
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
        </div>
        </>
    )
}

export default CategoryCom