"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRatings from 'react-star-ratings';
const SingleBooks = ({ books }) => {
    const { id, name, img, description, ratings, price } = books;
    return (
        <div className="card w-full bg-base-100 border  rounded-sm ">
            <figure>
                <Link href={`/books/${id}`}>
                    <Image
                        height={50}
                        width={120}
                        src={img}
                        alt='book image'
                        className='mt-4'
                    ></Image>
                </Link>
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p>{description.slice(0, 30)}</p>
                <div className='md:flex items-center '>
                    <StarRatings
                        rating={ratings}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="orange"
                    />
                    <p className=''>{ratings}</p>
                </div>
                <p className='text-base text-red-700'>${price}</p>
            </div>

        </div>
    );
};

export default SingleBooks;
