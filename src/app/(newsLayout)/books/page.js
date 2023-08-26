import BooksRightBar from '@/components/Books/BooksRightBar';
import React from 'react';

const Books = () => {
    return (
        <div className='flex-row md:flex '>
            {/* left bar */}
            <div className='md:w-[20%]'>
                books left bar
            </div>

            {/* right bar */}
            <div className='md:w-[80%]'>
                <BooksRightBar></BooksRightBar>
            </div>
        </div>
    );
};

export default Books;