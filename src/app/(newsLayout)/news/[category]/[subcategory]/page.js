import CategoryCom from '@/components/CategoryCom/CategoryCom';
import { subCategories } from '@/hooks/useSubCategories';
import React from 'react'

const Subcategory = async ({params}) => {
    const subCat = params.subcategory;
    const subCategoryData = await subCategories(subCat);
    // console.log(subCategoryData);
  return (
    <CategoryCom data={subCategoryData} params={params.subcategory} />
  )
}

export default Subcategory