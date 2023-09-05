import React from 'react';
import SingleBooks from '../SingleBooks';
import data from '../../../utils/book.json'

const AllBooks = () => {
    const booksData = data;
    return (
        <div>
            <h2 className='text-3xl font-semibold mt-16 mb-5'>Best sellers</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    booksData.map(books => <SingleBooks
                        key={books.id}
                        books={books}
                    ></SingleBooks>)
                }
            </div>
        </div>
    );
};

export default AllBooks;


