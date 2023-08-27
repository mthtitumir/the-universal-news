import React from 'react';
import GetCatagoryDataFromDb from './GetCatagoryDataFromDb';

const GetCategoryData = (category) => {
   return GetCatagoryDataFromDb(category)
};

export default GetCategoryData;