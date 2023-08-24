import CategoryCom from '@/components/CategoryCom/CategoryCom';
import CategoryDisplay from '@/components/CategoryCom/CategoryDisplay';
import { categories } from '@/hooks/useCategories';
import Link from 'next/link';

const category = async ({ params }) => {
    const categoryData = await categories(params.category);
    const subcategories = [];
    categoryData.forEach(item => {
        if (!subcategories.includes(item.subcategory)) {
            subcategories.push(item.subcategory);
        }
    });
    const categoryName = categoryData[0].category.toUpperCase();
    return (
        <>
            <div className='flex items-center gap-7 c-auto'>
                <h2 className='text-3xl font-semibold text-cyan-500'>{categoryName}</h2>
                <div>
                    <ul className=' flex justify-start gap-4 py-5  '>
                        {
                            subcategories.map((subCat, index) => <Link href={`/sports/${params.category}/${subCat}`} key={index + 1}><li >{subCat.toUpperCase()}</li></Link>)
                        }
                    </ul>
                </div>
            </div>
            <CategoryDisplay data={categoryData} />
        </>
    );
};

export default category;
