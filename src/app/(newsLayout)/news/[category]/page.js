import CategoryCom from '@/components/CategoryCom/CategoryCom';

const category = async ({ params }) => {
    return (
        <CategoryCom params={params} />
    );
};

export default category;
