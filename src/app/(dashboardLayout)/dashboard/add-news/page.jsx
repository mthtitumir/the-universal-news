"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const AddaNews = () => {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        const id = Math.floor(Math.random() * 100000);
        const status = 'pending';
        const comments = [];
        const likes = 0;
        const published_date = new Date().toISOString();
        const { title, description, img, category, subcategory, author, tagses, email, } = data;
        const tags = tagses.split(',');
        try {
            const response = await axios.post(`/api/add-news`, { id, title, description, img, category, subcategory, author, tags, comments, email, published_date,likes,status });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        reset()

    }
    return (
        <div>
            <h1 className='text-center text-5xl text-cyan-500 mt-5'>Add a news </h1>
            <div className=" w-full  shadow-2xl card-background ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">title</span>
                        </label>
                        <input type="text" placeholder="News title" {...register("title", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.title?.type === 'required' && <p className="text-red-500">title is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">description</span>
                        </label>
                        <input type="text" placeholder="News description" {...register("description", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.description?.type === 'required' && <p className="text-red-500">description is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">img</span>
                        </label>
                        <input type="text" placeholder="News img link" {...register("img", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <select className='input input-bordered input-accent w-full' {...register("category", { required: true })}>

                            <option value="politics">select a category</option>
                            <option value="politics">politics</option>
                            <option value="business">business</option>
                            <option value="science">science</option>
                            <option value="food">food</option>
                            <option value="sports">sports</option>
                            <option value="technology">Technology</option>
                            <option value="health">health</option>
                            <option value="arts">arts</option>
                            <option value="travel">Travel</option>
                            <option value="fashion">fashion</option>
                            <option value="world">world</option>
                        </select>
                    </div>
                    {errors.category?.type === 'required' && <p className="text-red-500 flex items-center ">category is required</p>}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">subcategory</span>
                        </label>
                        <select className='input input-bordered input-accent w-full' {...register("subcategory", { required: true })}>

                            <option value="asia">slect a sub category</option>
                            <option value="asia">asia</option>
                            <option value="north-america">north america</option>
                            <option value="south-america">south america</option>
                            <option value="australia">australia</option>
                            <option value="antarctica">antarctica</option>
                            <option value="europe">europe</option>
                            <option value="africa">Africa</option>
                            <option value="tech">Tech</option>
                            <option value="econ">econ</option>
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
                            <span className="label-text card-text-secondary">author name</span>
                        </label>
                        <input type="text" placeholder="instractot name" {...register("author")} value={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">author email</span>
                        </label>
                        <input type="text" placeholder="instractot name" {...register("email")} value={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">add tags</span>
                        </label>
                        <input type="text"  {...register("tagses")} className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="primary-btn">add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddaNews;