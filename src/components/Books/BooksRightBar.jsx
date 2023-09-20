import React from 'react';
import SwiperSection from './booksComponent/SwiperSection';
import Gallery from './booksComponent/Gallery';
import AllBooks from './booksComponent/AllBooks';
import Author from './booksComponent/Author';
import { GetAllBooksFromDB } from '@/services/GetAllNewsFromDB';

const BooksRightBar = async () => {
    const booksData = await GetAllBooksFromDB();
    const authorData = booksData.map(book => ({
        authorName: book.authorName,
        authorImage: book.authorImage
    }));
    return (
        <div className='px-3 md:px-0 '>
            <SwiperSection></SwiperSection>

            <Gallery></Gallery>

            <AllBooks></AllBooks>

            <Author authorData={authorData}></Author>

        </div>
    );
};

export default BooksRightBar;
