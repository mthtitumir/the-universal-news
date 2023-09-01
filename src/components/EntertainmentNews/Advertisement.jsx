import Image from "next/image";
import React from "react";

const Advertisement = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        alt="banner image"
        width={400}
        height={300}
        className=" z-10 rounded-xl w-full h-[450px]"
        src={"https://i.ibb.co/vdDvSPy/15712.jpg"}
      ></Image>
      <Image
        alt="banner image"
        width={400}
        height={300}
        className=" z-10 rounded-xl w-full h-[450px] lg:block hidden"
        src={"https://i.ibb.co/B6n21G9/adverticement.jpg"}
      ></Image>
    </div>
  );
};

export default Advertisement;
