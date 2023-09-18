"use client"
import Image from 'next/image';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import Ratings from './Ratings';
const SingleBooks = ({ books }) => {
    const { id, name, img, description, ratings, price } = books;
    return (
        <div className="card w-full bg-base-100 border rounded-sm ">
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
                <h2 className="text-md md:text-xl font-semibold text-center">{name}</h2>
                <p className='text-xs md:text-sm'>{description.slice(0, 30)}</p>
                <div className='flex items-center '>
                    <Ratings ratings={ratings} />
                    <p className='text-md'>{ratings}</p>
                </div>
                <p className='text-base text-red-700'>${price}</p>
            </div>
        </div>
    );
};

export default SingleBooks;
