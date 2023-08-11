import React from 'react';

const NewsCardOne = ({ item }) => {

// console.log(item);
    return (
        <div className=''>
            <h1>{item?.title}</h1>
            <div className="divider"></div>
        </div>
    );
};

export default NewsCardOne;