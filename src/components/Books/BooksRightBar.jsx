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

            <Author></Author>

        </div>
    );
};

export default BooksRightBar;
