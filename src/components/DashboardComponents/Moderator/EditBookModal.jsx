"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const EditBook = ({ singleBook }) => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const validateRating = (value) => {
        const rating = parseFloat(value);
        return rating <= 5 || 'Rating must be less than or equal to 5';
    };
    const { id, name, img, description, ratings, category, price, authorName, authorImage, publisher } = singleBook;
    const onSubmit = async (data) => {
        // console.log(data);
        const { name, img, description, ratings, category, price, authorName, authorImage, publisher } = data;
        const postDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        const moderatorEmail = user?.email;
        const toastId = toast.loading("Loading...");
        const bookData = { id, name, img, description, ratings, category, price, authorName, authorImage, publisher, postDate, moderatorEmail };
        // console.log(bookData);
        try {
            const response = await axios.put(`/api/moderator/book-delete-edit/${id}`, bookData);
            console.log(response.data);
            if (response.data.matchedCount > 0) {
                toast.dismiss(toastId);
                toast.success("Book posted successfully!");
            } else {

                toast.dismiss(toastId);
                toast.error(error.message || "Book updating failed!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            toast.dismiss(toastId);
            toast.error(error.message || "News posting failed!");
        }
        reset();
    }


    return (
        <div className=''>
            <div className=" w-full  shadow-2xl card-background border border-cyan-500 rounded-lg mt-3">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Name</span>
                            </label>
                            <input type="text" placeholder="Book Name" defaultValue={name} {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Category</span>
                            </label>
                            <input type="text" placeholder="Book Category" defaultValue={category} {...register("category", { required: true })} className="input input-bordered" />
                            {errors.category?.type === 'required' && <p className="text-red-500">Category is required</p>}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Ratings</span>
                            </label>
                            <Controller
                                name="ratings"
                                control={control}
                                defaultValue={ratings}
                                rules={{ required: true, validate: validateRating }}
                                render={({ field }) => (
                                    <input
                                        type="number"
                                        placeholder="Ratings"
                                        className={`input input-bordered ${errors.ratings ? 'input-error' : ''}`}
                                        {...field}
                                    />

                                )}
                            />
                            {errors.ratings && (
                                <p className="text-red-500">{errors.ratings.message}</p>
                            )}
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Price</span>
                            </label>
                            <input type="text" placeholder="Book Price" defaultValue={price} {...register("price", { required: true })} className="input input-bordered" />
                            {errors.price?.type === 'required' && <p className="text-red-500">price is required</p>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Description</span>
                        </label>
                        <input type="text" placeholder="Book Description" defaultValue={description} {...register("description", { required: true })} className="input input-bordered" />
                        {errors.description?.type === 'required' && <p className="text-red-500">description is required</p>}
                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Image Link</span>
                            </label>
                            <input type="text" placeholder="Book Image URL" defaultValue={img} {...register("img", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Publisher</span>
                            </label>
                            <input type="text" placeholder="Published By" defaultValue={publisher} {...register("publisher")} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Author Name</span>
                            </label>
                            <input type="text" placeholder="Author Name" defaultValue={authorName} {...register("authorName")} className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Author Image</span>
                            </label>
                            <input type="text" placeholder="Author Image URL" defaultValue={authorImage} {...register("authorImage")} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="primary-btn">Update Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBook;