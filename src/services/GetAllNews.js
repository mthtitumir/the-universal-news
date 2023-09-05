import { ApproveNewsAtDB, GetAllJobsFromDB, GetAllNewsFromDB, GetAllReportersFromDB,GetAllEmployersFromDB, GetAllUsersFromDB, GetCategoryDataFromDb, GetPendingNewsFromDB, GetSingleJobsFromDB, GetSingleNewsFromDB, GetSubcategoryFromDb, getRoleFromDB, GetAllCommentsFromDB } from './GetAllNewsFromDB';
export const GetAllNews = () => GetAllNewsFromDB();
export const GetCategoryData = (category) => GetCategoryDataFromDb(category);
export const GetSingleNews = (id) => GetSingleNewsFromDB(id);
export const GetSubCategory = (subCategories) => GetSubcategoryFromDb(subCategories);
export const GetAllUsers = () => GetAllUsersFromDB();
export const GetAllReporters = () => GetAllReportersFromDB();
export const GetAllEmployers = () => GetAllEmployersFromDB();
export const GetPendingNews = () => GetPendingNewsFromDB();
export const GetAllJobs = () => GetAllJobsFromDB();
export const GetSingleJobs = (id) => GetSingleJobsFromDB(id);
export const GetAllComments = () => GetAllCommentsFromDB();

