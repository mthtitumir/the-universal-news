import CategoryCom from '@/components/CategoryCom/CategoryCom';
import { categories } from '@/hooks/useCategories';

const category = async ({ params }) => {
    return (
        <CategoryCom params={params} />
    );
};

export default category;
