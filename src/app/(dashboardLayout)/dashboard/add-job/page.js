"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddAJob = () => {
    const { user } = useAuth();

    const { register, handleSubmit,control, formState: { errors }, reset } = useForm();
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
                            <span className="label-text card-text-secondary">Job Title</span>
                        </label>
                        <input type="text" placeholder="Job Title" {...register("title", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.title?.type === 'required' && <p className="text-red-500">Job Title is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">jobDescription</span>
                        </label>
                        <input type="text" placeholder="Job Description" {...register("description", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.description?.type === 'required' && <p className="text-red-500">Job Description is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Company Name</span>
                        </label>
                        <input type="text" placeholder="News img link" {...register("companyName", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">companyLogo</span>
                        </label>
                        <input type="text" placeholder="author name" {...register("companyLogo")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Author Email</span>
                        </label>
                        <input type="text" placeholder="author email" {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <select className='input input-bordered w-full' {...register("jobLocation", { required: true })}>
                            <option className='my-2' value="">Select job Location </option>
                            <option value="remote">Remote</option>
                            <option value="onsite">Onsite</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">EmployMent Type</span>
                        </label>
                        <select className='input input-bordered w-full' {...register("employmentType", { required: true })}>
                            <option value="">Select EmployMent Type </option>
                            <option value="full-time">Fulltime</option>
                            <option value="part-time">Part time</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">applicationDeadline</span>
                        </label>
                        <Controller
                            control={control}
                            name="applicationDeadline"
                            render={({ field }) => (
                                <DatePicker
                                    className="input input-bordered input-accent w-full"
                                    {...field}
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    placeholderText="applicationDeadline"
                                    dateFormat="dd/MM/yyyy"
                                    isClearable
                                />
                            )}
                        />
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