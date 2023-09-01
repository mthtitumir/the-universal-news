"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddAJob = () => {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const id = Math.floor(Math.random() * 100000);
        const status = 'pending';
        const comments = [];
        const likes = 0;
        const published_date = new Date().toISOString();
        const { title, description, img, category, subcategory, author, keywords, email, } = data;
        const toastId = toast.loading("Loading...");
        const tags = keywords.split(',');
        try {
            const response = await axios.post(`/api/add-news`, { id, title, description, img, category, subcategory, author, tags, comments, email, published_date, likes, status });
            console.log(response.data);
            if (response.data.insertedId) {
                toast.dismiss(toastId);
                toast.success("News posted successfully!");
            } else {

                toast.dismiss(toastId);
                toast.error(error.message || "News posting failed!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            toast.dismiss(toastId);
            toast.error(error.message || "News posting failed!");
        }
        reset();

    }
    return (
        <div>
            <h1 className='text-center text-5xl text-cyan-500 mt-5'>Add a news </h1>
            <div className=" w-full  shadow-2xl card-background ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Title</span>
                        </label>
                        <input type="text" placeholder="News title" {...register("title", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.title?.type === 'required' && <p className="text-red-500">title is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Description</span>
                        </label>
                        <input type="text" placeholder="News description" {...register("description", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.description?.type === 'required' && <p className="text-red-500">description is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Image Link</span>
                        </label>
                        <input type="text" placeholder="News img link" {...register("img", { required: true })} className="input input-bordered" />
                    </div>                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Author Name</span>
                        </label>
                        <input type="text" placeholder="author name" {...register("author")} defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Author Email</span>
                        </label>
                        <input type="text" placeholder="author email" {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Add Tags</span>
                        </label>
                        <input type="text" placeholder='Related keywords!'  {...register("keywords")} className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="primary-btn">Add This News</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAJob;