import React from 'react';
import DbConnect from './DbConnect';
import { ObjectId } from 'mongodb';

const GetSingleNewsFromDB = async(id) => {
    const ids = id;
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { _id: new ObjectId(ids) }
        const result = await allNews.findOne(query)
        return result;
};

export default GetSingleNewsFromDB;