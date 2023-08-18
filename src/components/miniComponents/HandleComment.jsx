"use client" 
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const HandleComment = () => {
    const {user} = useAuth()
    
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async(data) => {
        const comments = data.comment
        const author = user?.displayName
        const currentDate = new Date().toISOString()
        const newsId = "64d9a56a1e4d5123978f0d29";
        try {
            const response = await axios.post(`/api/add-comment/${newsId}`, { comments, author,currentDate});
            console.log(response.data); 
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        reset()
      }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    cols="70"
                    className='border-b-4 border-black'
                    placeholder='Share your thoughts'
                    {...register("comment")}
                ></textarea>
                <button className='bg-cyan-500 rounded px-2 py-1 text-white ml-4' type="submit">post</button>
            </form>
        </div>
    );
};

export default HandleComment;