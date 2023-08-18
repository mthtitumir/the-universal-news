"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const HandleComment = () => {
    const { user } = useAuth()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async (data) => {
        const comments = data.comment
        const author = user?.displayName
        const currentDate = new Date().toISOString()
        const newsId = "64d9a56a1e4d5123978f0d29";
        try {
            const response = await axios.post(`/api/add-comment/${newsId}`, { comments, author, currentDate });
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
                    className='border flex-1 px-5 py-2 rounded focus:outline-none'
                    placeholder='Share your thoughts'
                    {...register("comment")}
                ></textarea>
                <div className='flex justify-end mt-3'>
                    <button className='bg-cyan-500 text-white px-2 py-1 rounded flex items-center gap-1' type="submit">post</button>
                </div>
            </form>
        </div>
    );
};

export default HandleComment;