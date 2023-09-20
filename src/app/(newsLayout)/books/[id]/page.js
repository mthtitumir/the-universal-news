import Image from "next/image";
import Ratings from "@/components/Books/Ratings";
import { GetSingleBookFromDB } from "@/services/GetAllNewsFromDB";

const BookDetails = async ({ params }) => {
  const bookDetails = await GetSingleBookFromDB(params?.id);
  // console.log(bookDetails);
  const {
    name,
    img,
    description,
    ratings,
    price,
    authorName,
    authorImage,
  } = bookDetails;
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
          <Ratings ratings={ratings} />
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
