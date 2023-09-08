import DbConnect from './DbConnect';
import { ObjectId } from 'mongodb';

export const GetAllNewsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetCategoryDataFromDb = async (category) => {
    try {
        const query = { category: category };
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find(query).toArray();
        return result
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleNewsFromDB = async (id) => {
    try {
        const ids = id;
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { _id: new ObjectId(ids) }
        const result = await allNews.findOne(query)
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSubcategoryFromDb = async (subCategories) => {
    try {
        const subcategory = subCategories
        const query = { subcategory: subcategory };
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find(query).toArray();
        return result
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetAllUsersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const result = await allUsers.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};

export const GetAllReportersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const query = { role: "reporter" }
        const result = await allUsers.find(query).toArray();
        // console.log(result.length);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetAllEmployersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const query = { role: "employer" }
        const result = await allUsers.find(query).toArray();
        // console.log(result.length);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}

export const GetPendingNewsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { status: "pending" };
        const result = await allNews.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetAllJobsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const result = await allJobs.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetSingleJobsFromDB = async (id) => {
    try {
        const ids = id;
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const query = { id: ids }
        const result = await allJobs.findOne(query)
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
