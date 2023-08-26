import CategoryCom from '@/components/CategoryCom/CategoryCom';
import CategoryDisplay from '@/components/CategoryCom/CategoryDisplay';
import { categories } from '@/hooks/useCategories';
import Link from 'next/link';

const category = async ({ params }) => {
    const categoryData = await categories(params.category);
    // console.log(categoryData);
    const subcategories = [];
    categoryData.forEach(item => {
        if (!subcategories.includes(item.subcategory)) {
            subcategories.push(item.subcategory);
        }
    });
    const categoryName = categoryData[0].category.toUpperCase();
    return (
        <>
            <div className='flex items-center gap-7 c-auto px-3 md:px-0'>
                <h2 className='text-2xl md:text-3xl font-semibold text-cyan-500'>{categoryName}</h2>
                <div>
                    <ul className=' flex justify-start gap-2 md:gap-4 py-5  '>
                        {
                            subcategories.map((subCat, index) => <li key={index + 1} className='text-sm md:text-base'><Link href={`/sports/${params.category}/${subCat}`}>{subCat.toUpperCase()}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
            <CategoryDisplay data={categoryData} />
        </>
    );
};

export default category;
