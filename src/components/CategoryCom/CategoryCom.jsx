import { categories } from '@/hooks/useCategories';
import Link from 'next/link';
import CategoryDisplay from './CategoryDisplay';
import { GetCategoryData } from '@/services/GetAllNews';


const CategoryCom = async ({ params }) => {
    const category = params.category
    const categoryData = await GetCategoryData(category);
    let data = [];
    let categoryName = "";
    const subcategories = [];
    categoryData.forEach(item => {
        if (!subcategories.includes(item.subcategory)) {
            subcategories.push(item.subcategory);
        }
    });
    if (params.category) {
        data = categoryData;
        categoryName = params.category.toUpperCase();
    }
    if (params.subcategory) {
        data = categoryData.filter(data => data.subcategory === params.subcategory);
        categoryName = data[0]?.category.toUpperCase();
    }

    return (
        <>
            <div className=' container mx-auto mt-5'>
                {/* Category Navbar */}
                <div className='flex items-center gap-7'>
                    <h2 className='text-3xl font-semibold text-cyan-500'>{categoryName}</h2>
                    <div>
                        <ul className=' flex justify-start gap-4 py-5  '>
                            {
                                subcategories.map((subCat, index) => <Link href={`/news/${params.category}/${subCat}`} key={index + 1}><li >{subCat.toUpperCase()}</li></Link>)
                            }
                        </ul>
                    </div>
                </div>

                <div>
                    <CategoryDisplay data={data} />
                </div>
            </div>
        </>
    )
}

export default CategoryCom