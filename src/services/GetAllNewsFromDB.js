import React from 'react';
import DbConnect from './DbConnect';

const GetAllNewsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find().toArray();
        return result;
       } catch (error) {
        console.error(error)
        return ({error:'error to get data'});
       }
};

export default GetAllNewsFromDB;