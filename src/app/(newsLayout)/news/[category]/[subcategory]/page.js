import CategoryCom from '@/components/CategoryCom/CategoryCom';
import { subCategories } from '@/hooks/useSubCategories';
import React from 'react'

const Subcategory = async ({ params }) => {
  return (
    <CategoryCom params={params} />
  )
}

export default Subcategory