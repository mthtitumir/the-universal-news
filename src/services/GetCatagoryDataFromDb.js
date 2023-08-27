// import React from 'react';
// import DbConnect from './DbConnect';

// const GetCatagoryDataFromDb = async(category) => {
//     const { searchParams } = new URL(request.url)
//     const categorys = category
//     const query = { category: category };
//     const db = await DbConnect();
//     const allNews = db.collection('all-news');
//     const result = await allNews.find(query).toArray();
//     return NextResponse.json(result);
// };

// export default GetCatagoryDataFromDb;