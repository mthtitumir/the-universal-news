"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const AddaNews = () =>  {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const id = Math.floor(Math.random() * 100000);
        const status = 'pending';
        const comments = [];
        const likes = 0;
        const published_date = moment().format('MMMM Do YYYY, h:mm:ss a');
        const { title, description, img, category, subcategory, author, keywords, email, } = data;
        const toastId = toast.loading("Loading...");
        const tags = keywords.split(',');
        const newsData = {id, title, description, img, category, subcategory, author, tags, comments, email, published_date, likes, status};
        try {
            const response = await axios.post(`/api/add-news`, newsData);
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
        <div className='p-3 md:pr-0'>
            <DashboardBanner text={"Add a News"} />
            <div className=" w-full  shadow-2xl card-background border border-cyan-500 rounded-lg mt-3">
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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className='input input-bordered w-full' {...register("category", { required: true })}>
                            <option value="politics">Select a Category</option>
                            <option value="politics">Politics</option>
                            <option value="business">Business</option>
                            <option value="science">Science</option>
                            <option value="food">Food</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                            <option value="health">Health</option>
                            <option value="arts">Arts</option>
                            <option value="travel">Travel</option>
                            <option value="fashion">Fashion</option>
                            <option value="world">World</option>
                        </select>
                    </div>
                    {errors.category?.type === 'required' && <p className="text-red-500 flex items-center ">category is required</p>}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Subcategory</span>
                        </label>
                        <select className='input input-bordered w-full' {...register("subcategory", { required: true })}>

                            <option value="asia">Select a sub category</option>
                            <option value="asia">Asia</option>
                            <option value="north-america">North America</option>
                            <option value="south-america">South America</option>
                            <option value="australia">Australia</option>
                            <option value="antarctica">Antarctica</option>
                            <option value="europe">Europe</option>
                            <option value="africa">Africa</option>
                            <option value="tech">Tech</option>
                            <option value="econ">Econ</option>
                            <option value="media">media</option>
                            <option value="money">money</option>
                            <option value="chemistry">chemistry</option>
                            <option value="physics">physics</option>
                            <option value="math">math</option>
                            <option value="biology">biology</option>
                            <option value="chinese">chinese</option>
                            <option value="italian">italian</option>
                            <option value="indian">indian</option>
                            <option value="mexican">mexican</option>
                            <option value="japanese">japanese</option>
                            <option value="cricket">cricket</option>
                            <option value="football">football</option>
                            <option value="tennis">tennis</option>
                        </select>
                    </div>
                    {errors.ClassImage?.type === 'required' && <p className="text-red-500">subcategory  is required</p>}
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

export default AddaNews;