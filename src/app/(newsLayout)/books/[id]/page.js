"use client";
import React from "react";
import data from "../../../../utils/book.json";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const BookDetails = ({ params }) => {
  const bookDetails = data;
  const id = params.id;
  const booksDetails = bookDetails.find((job) => job.id == id);

  const {
    name,
    img,
    description,
    ratings,
    price,
    category,
    authorName,
    authorImage,
  } = booksDetails;

  return (
    <div className="flex-row md:flex c-auto w-[90%] md:px-20 my-10">
      {/* left bar */}
      <div className="md:w-[20%]">
        <Image
          height={200}
          width={300}
          src={img}
          alt="book image"
          className=" sm:mx-auto"
        ></Image>
        <p className="text-lg mt-2 font-semibold text-gray-800">
          Price: ${price}
        </p>
      </div>

      {/* right bar */}
      <div className="md:w-[70%] px-20">
        <h2 className=" mt-10 mb-4 text-4xl font-semibold ">{name}</h2>
        <div className="md:flex items-center ">
          <StarRatings
            rating={ratings}
            starDimension="30px"
            starSpacing="4px"
            starRatedColor="orange"
          />
          <p className="pl-3 mt-2 text-2xl font-semibold">{ratings}</p>
        </div>
        <p className="mt-4 text-gray-700">{description}</p>

        <div className="flex items-center gap-2">
          <Image
            height={200}
            width={140}
            src={authorImage}
            alt="author image"
            className="rounded mt-2"
          ></Image>
          <p className="text-lg  text-gray-600">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
