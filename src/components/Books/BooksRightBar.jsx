import React from 'react';
import SwiperSection from './booksComponent/SwiperSection';
import Gellery from './booksComponent/Gellery';
import AllBooks from './booksComponent/AllBooks';
import Author from './booksComponent/Author';

const BooksRightBar = () => {
    return (
        <div>
            <SwiperSection></SwiperSection>

            <Gellery></Gellery>

            <AllBooks></AllBooks>

            {/* <Author></Author> */}
            {/* <h1 className='text-3xl font-semibold mt-16 mb-3'>Popular authors & series</h1> */}
        </div>
    );
};

export default BooksRightBar;