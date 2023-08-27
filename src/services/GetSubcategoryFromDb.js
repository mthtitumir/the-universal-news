import React from 'react';
import DbConnect from './DbConnect';

const GetSubcategoryFromDb =async (subCategories) => {
    const subcategory = subCategories
    const query = { subcategory: subcategory };
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find(query).toArray();
    return result
};

export default GetSubcategoryFromDb;