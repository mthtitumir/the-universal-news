"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarRatings from 'react-star-ratings';
const SingleBooks = ({ books }) => {
  const { id, name, img, description, ratings, price } = books;
    return (
        <div className="card w-full bg-base-100 border rounded-sm ">
            <figure>
                <Image
                    height={50}
                    width={120}
                    src={img}
                    alt='book image'
                    className='mt-4'
                ></Image>
            </figure>
            <div className="card-body text-center">
                <h2 className="text-md md:text-xl font-semibold text-center">{name}</h2>
                <p className='text-xs md:text-sm'>{description.slice(0, 30)}</p>
                <div className='md:flex items-center '>
                    <StarRatings
                        rating={ratings}
                        starDimension="15px"
                        starSpacing="2px"
                        starRatedColor="orange"
                        // className="text-3xl"
                    />
                    <p className='text-sm'>{ratings}</p>
                </div>
                <p className='text-base text-red-700'>${price}</p>
            </div>
        </div>
    );
};

export default SingleBooks;
