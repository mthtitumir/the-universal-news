"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiSolidPaperPlane } from 'react-icons/bi';

const HandleComment = ({ id, comments, socialShare }) => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async (data) => {
        const comments = data.comment;
        const author = user?.displayName;
        const userImg = user?.photoURL;
        const date = new Date().toISOString();
        const newsId = id;
        try {
            const response = await axios.post(`/api/add-comment/${newsId}`, { comments, author, userImg, date });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        reset()
    }
    return (
        <>
            <div className="divider"></div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl'>Comment</h1>
                </div>
                {socialShare}
            </div>
            <div className="divider"></div>
            <div className='flex justify-end'>
                <h1 className='text-lg'>{user ? user.displayName : <span className='text-cyan-500 border rounded-lg px-2 py-1'><Link href={'/login'}>Login</Link></span>}</h1>
            </div>
            <div className="divider"></div>

            {/* user comment input starts   */}
            <div className='my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-center gap-5'>
                        <Image className='rounded-full' src={user ? user.photoURL : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={40} width={40} alt='user photo ' />
                        <input {...register("comment")} type="text" placeholder='Write your comment!' className='border flex-1 px-5 py-2 rounded focus:outline-none' />
                    </div>
                    <div className='flex justify-end mt-3'>
                        <button type="submit" className='bg-cyan-500 text-white px-2 py-1 rounded flex items-center gap-1'> <BiSolidPaperPlane />Post</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    comments.map(comment => <div key={comment.id} className='flex items-center my-5 gap-5 border py-3 rounded-xl px-3'>
                        <div>
                            <Image className='rounded-full' src={comment.userImg ? comment.userImg : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} height={48} width={48} alt='user photo ' />
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-5'>
                                <h1 className='text-lg'>{comment?.author}</h1>
                                <p className='text-sm'>{comment?.date}</p>
                            </div>
                            <div>
                                <h1 className='text-md'>{comment.text}</h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default HandleComment;