"use client"

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { BiSolidPaperPlane } from 'react-icons/bi';
import SocialShare from "../miniComponents/SocialShare";
import axios from "axios";

const PostComment = ({ id, refetch }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async (data) => {
    if (!user) {
      return;
    }
    const text = data.text;
    const author = user?.displayName;
    const userImg = user?.photoURL;
    const date = new Date().toISOString();
    const newsId = id;
    try {
      const response = await axios.post(`/api/add-comment/${newsId}`, { text, author, userImg, date });
      console.log(response.data, "from comment");
      refetch();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    reset()
  }
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-xl md:text-2xl'>Comment</h1>
        </div>
        <SocialShare />
      </div>
      <div className="divider"></div>
      <div className='flex justify-end'>
        <h1 className='text-md md:text-lg'>{user ? user.displayName : <span className='primary-btn'><Link href={'/login'}>Login</Link></span>}</h1>
      </div>
      <div className="divider"></div>

      {/* user comment input functionality starts   */}
      <div className='my-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-5'>
            <Image className='rounded-full' src={user ? user.photoURL : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={40} width={40} alt='user photo ' />
            <input {...register("text")} type="text" placeholder='Write your comment!' className='border flex-1 px-5 py-2 rounded focus:outline-none' />
          </div>
          <div className='flex justify-end mt-3'>
            <button type="submit" className='bg-cyan-500 text-white px-2 py-1 rounded flex items-center gap-1'> <BiSolidPaperPlane />Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostComment