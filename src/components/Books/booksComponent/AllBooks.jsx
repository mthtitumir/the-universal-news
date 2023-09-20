import React from 'react';
import SingleBooks from '../SingleBooks';
import { GetAllBooksFromDB } from '@/services/GetAllNewsFromDB';

const AllBooks = async () => {
    const booksData = await GetAllBooksFromDB();
    
    return (
        <div>
            <h2 className='text-3xl font-semibold mt-16 mb-5'>Best sellers</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {
                    booksData?.map(books => <SingleBooks
                        key={books.id}
                        books={books}
                    ></SingleBooks>)
                }
            </div>
        </div>
    );
};

export default AllBooks;


