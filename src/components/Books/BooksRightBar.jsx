"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../../utils/book.json";

// import '.'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";
import Image from "next/image";
import SingleBooks from "./SingleBooks";

const BooksRightBar = () => {
  const booksData = data;
  console.log(booksData);

  return (
    <div>
      <h1 className="text-5xl text-zinc-700 font-normal my-6">
        Universal Books
      </h1>

      {/* auto sliders */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
              alt="book image"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
              alt="book image"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
              alt="book image"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
              alt="book image"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Gellrey */}
      <div>
        <Image
          height={500}
          width={1000}
          src="https://i.ibb.co/bmdkcCf/Desk-BHP-may-1500x300.jpg"
          alt="book image"
          className="mt-6"
        ></Image>
        <div className="grid grid-cols-4 gap-4 my-6 mx-auto ">
          <div>
            <Image
              height={100}
              width={250}
              src="https://i.ibb.co/ZKpR5YC/g4.jpg"
              alt="book image"
            ></Image>
          </div>
          <div>
            <Image
              height={100}
              width={250}
              src="https://i.ibb.co/zFn8dHw/g3.jpg"
              alt="book image"
            ></Image>
          </div>
          <div>
            <Image
              height={100}
              width={250}
              src="https://i.ibb.co/BtW98rz/g2.jpg"
              alt="book image"
            ></Image>
          </div>
          <div>
            <Image
              height={100}
              width={250}
              src="https://i.ibb.co/7KTWnxm/g1.jpg"
              alt="book image"
            ></Image>
          </div>
        </div>
      </div>

      {/* Books */}
      <h2 className="text-3xl font-semibold mt-16 mb-5">Best sellers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {booksData.map((book) => (
          <SingleBooks key={book.id} book={book}></SingleBooks>
        ))}
      </div>

      {/* Author */}
      <h1 className="text-3xl font-semibold mt-16 mb-3">
        Popular authors & series
      </h1>
    </div>
  );
};

export default BooksRightBar;
