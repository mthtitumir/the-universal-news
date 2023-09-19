"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import chackout from "@/components/stripecheckouts/chackout";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Link from "next/link";

const JobPost = () => {
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const handleBuyClick = () => {
    chackout({
      lineItems: [{ price: "price_1NkctcIaZAuMRrsm4jGYwQXE", quantity: 1 }],
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const successParam = params.get("success");
    const updateUserRole = async () => {
      if (successParam === "true" && user) {
        try {
          const response = await axios.post(
            `api/change-user-role-after-payment?email=${user?.email}`
          );
          console.log(response.data);

          setIsSuccess(true);
        } catch (error) {
          console.error("Error updating role:", error);
        }
      }
    };

    updateUserRole();
  }, [user]);

  return (
    <div className="  md:flex justify-center items-center bg-orange-50">
      <div className="md:w-[50%] md:bg-white">
        <div className="mx-4 md:mx-40">
          {/* <h2 className={`${myFont.className} text-3xl mt-5`}><Link href="/">The Universal News</Link></h2> */}
          <h2 className="text-slate-950 text-4xl my-14">Post Your Jobs</h2>

          <div>
            <p className=" text-slate-950  ">
              Subscribe now for become a employer{" "}
            </p>
            <span className="text-sm text-cyan-500 my-4">
              (only 50$ par maunthe for post unlimited job)
            </span>

            <form className="">
              <div className="flex gap-3 border-y border-gray-300 py-3">
                <input type="radio" id="week" name="subscribe" />
                <div>
                  <label className="font-semibold text-slate-950">50$</label>
                  <br />
                </div>
              </div>

              <button
                onClick={handleBuyClick}
                type="button"
                className="btn bg-slate-950 text-white hover:text-black rounded w-full mt-4"
              >
                Subcribe now
              </button>
            </form>
            {isSuccess && (
              <p className="text-green text-lg my-4 text-green-500">
                Payment successful! Thank you for your purchase.
              </p>
            )}
            {isSuccess && (
              <Link href={"/dashboard"}>
                <button className="primary-btn">Visit your dashboard</button>
              </Link>
            )}
            <p className="font-semibold text-slate-950 text-center mt-2">
              Cancel or pause anytime.
            </p>
            <div className="flex gap-3 justify-center mt-2 mb-14">
              <Image
                height={100}
                width={80}
                src="https://i.ibb.co/SKjk90z/Pay-Pal-2023-Logo.jpg"
                alt="Ad"
                className="border px-3"
              ></Image>
              <Image
                height={100}
                width={50}
                src="https://i.ibb.co/Db1Hfqh/Screenshot-2023-08-21-030201.png"
                alt="Ad"
                className="border rounded "
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* image */}
      <div className=" md:w-[50%]">
        <Image
          height={1400}
          width={1400}
          src="https://i.ibb.co/0B8kXYH/v2-removebg-preview.png"
          alt="Ad"
          className="md:py-44 ml-5"
        ></Image>
      </div>
    </div>
  );
};

export default JobPost;
