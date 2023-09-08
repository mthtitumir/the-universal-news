import React from 'react';
import SwiperSection from './booksComponent/SwiperSection';
import Gallery from './booksComponent/Gallery';
import AllBooks from './booksComponent/AllBooks';
import Author from './booksComponent/Author';

const BooksRightBar = () => {
    return (
        <div className='px-3 md:px-0 '>
            <SwiperSection></SwiperSection>

            <Gallery></Gallery>

            <AllBooks></AllBooks>

            <Author></Author>

        </div>
    );
};

export default BooksRightBar;
