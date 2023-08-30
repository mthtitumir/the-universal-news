import React from 'react';
import { GetAllNewsFromDB,  GetCatagoryDataFromDb, GetSingleNewsFromDB, GetSubcategoryFromDb } from './GetAllNewsFromDB';
export const GetAllNews = () => GetAllNewsFromDB();
export const GetCategoryData = (category) => GetCatagoryDataFromDb(category) ;
export const GetSingleNews = (id) =>GetSingleNewsFromDB(id);
export const GetSubCategory = (subCategories) => GetSubcategoryFromDb(subCategories) ;


