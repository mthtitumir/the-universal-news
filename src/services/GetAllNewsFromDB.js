
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
export const GetCatagoryDataFromDb = async (category) => {
    try {
        const categorys = category
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
export const GetSingleReporterNewsFromDb = async (email) => {
    try {
        const emails = email;
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { email: emails }
        const result = await allNews.findOne(query)
        console.log(result)
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};

