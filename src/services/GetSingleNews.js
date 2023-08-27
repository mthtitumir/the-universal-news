import React from 'react';
import GetSingleNewsFromDB from './GetSingleNewsFromDB';

const GetSingleNews = (id) => {
  return GetSingleNewsFromDB(id)
};

export default GetSingleNews;