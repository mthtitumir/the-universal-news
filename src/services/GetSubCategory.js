import React from 'react';
import GetSubcategoryFromDb from './GetSubcategoryFromDb';

const GetSubCategory = (subCategories) => {
   return GetSubcategoryFromDb(subCategories)
};

export default GetSubCategory;