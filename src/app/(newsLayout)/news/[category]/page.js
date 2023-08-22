import CategoryCom from '@/components/CategoryCom/CategoryCom';
import { categories } from '@/hooks/useCategories';

const category = async ({ params }) => {
    const categoryData = await categories(params.category);
    const data = categoryData.slice(0, 10);
    const relatedNewsData = categoryData.slice(0, 8);
    const subcategories = [];
    categoryData.forEach(item => {
        if (!subcategories.includes(item.subcategory)) {
            subcategories.push(item.subcategory);
        }
    });
    // console.log(subcategories);

    return (
        <CategoryCom params={params.category} data={categoryData}/>

    );
};

export default category;
