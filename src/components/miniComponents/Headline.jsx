import React from 'react';

const Headline = ({headline, seeMore}) => {
    return (
        <div className='flex justify-between items-center my-5'>
            <h1 className='text-3xl font-semibold'>{headline}</h1>
            <h1 className='text-base'>{seeMore}</h1>
        </div>
    );
};

export default Headline;