import { ApproveNewsAtDB, GetAllJobsFromDB, GetAllNewsFromDB, GetAllReportersFromDB,GetAllEmployersFromDB, GetAllUsersFromDB, GetCategoryDataFromDb, GetPendingNewsFromDB, GetSingleJobsFromDB, GetSingleNewsFromDB, GetSubcategoryFromDb, getRoleFromDB, GetAllCommentsFromDB, GetAllPostsFromDB, GetSinglePostFromDB, GetCategoryDataFromDB } from './GetAllNewsFromDB';
export const GetAllNews = () => GetAllNewsFromDB();
export const GetCategoryData = (category) => GetCategoryDataFromDB(category);
export const GetSubCategory = (subCategories) => GetSubcategoryFromDb(subCategories);
export const GetSingleNews = (id) => GetSingleNewsFromDB(id);
export const GetAllUsers = () => GetAllUsersFromDB();
export const GetAllReporters = () => GetAllReportersFromDB();
export const GetAllEmployers = () => GetAllEmployersFromDB();
export const GetPendingNews = () => GetPendingNewsFromDB();
export const GetAllJobs = () => GetAllJobsFromDB();
export const GetSingleJobs = (id) => GetSingleJobsFromDB(id);
// community posts get api's 
export const GetAllPosts = () => GetAllPostsFromDB();
export const GetSinglePost = (id) => GetSinglePostFromDB(id);
