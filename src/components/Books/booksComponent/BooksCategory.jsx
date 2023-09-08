import React from 'react';

const BooksCategory = ({ data }) => {
    return (

        <div>
            <h2 className="text-2xl font-semibold mb-2">{data?.bookCategory}</h2>
            <ul className="list-disc pl-4">
                {data.subCategory.map((subcategory) => (
                    <li className='list-none' key={subcategory}>{subcategory}</li>
                ))}
            </ul>
        </div>


    );
};

export default BooksCategory;