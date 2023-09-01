import { ApproveNewsAtDB, GetAllNewsFromDB, GetAllReportersFromDB, GetAllUsersFromDB, GetCategoryDataFromDb, GetPendingNewsFromDB, GetSingleNewsFromDB, GetSubcategoryFromDb, getRoleFromDB } from './GetAllNewsFromDB';
export const GetAllNews = () => GetAllNewsFromDB();
export const GetCategoryData = (category) => GetCategoryDataFromDb(category);
export const GetSingleNews = (id) => GetSingleNewsFromDB(id);
export const GetSubCategory = (subCategories) => GetSubcategoryFromDb(subCategories);
export const GetAllUsers = () => GetAllUsersFromDB();
export const GetAllReporters = () => GetAllReportersFromDB();
export const GetPendingNews = () => GetPendingNewsFromDB();

