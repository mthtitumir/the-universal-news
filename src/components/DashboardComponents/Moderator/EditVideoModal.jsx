"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const EditVideo = ({ singleVideo }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { videoId, channelId, title, description, channelTitle, publishTime, category } = singleVideo;
    const { user } = useAuth();
    const onSubmit = async (data) => {
        const moderatorEmail = user?.email;
        const { videoId, channelId, title, description, channelTitle, publishTime } = data;
        const postDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        const toastId = toast.loading("Loading...");
        const videoData = { videoId, channelId, title, description, channelTitle, publishTime, category, postDate, moderatorEmail };
        console.log(videoData);
        try {
            const response = await axios.put(`/api/moderator/video-delete-edit/${videoId}`, videoData);
            console.log(response.data);
            if (response.data.matchedCount > 0) {
                toast.dismiss(toastId);
                toast.success("Videos updated successfully!");
            } else {

                toast.dismiss(toastId);
                toast.error(error.message || "Videos updating failed!");
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
                                <span className="label-text card-text-secondary">Video ID</span>
                            </label>
                            <input type="text" placeholder="Video ID" defaultValue={videoId} {...register("videoId", { required: true })} className="input input-bordered" />
                            {errors.videoId?.type === 'required' && <p className="text-red-500">videoId is required</p>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Channel ID</span>
                            </label>
                            <input type="text" placeholder="Channel ID" defaultValue={channelId} {...register("channelId", { required: true })} className="input input-bordered" />
                            {errors.channelId?.type === 'required' && <p className="text-red-500">channelId is required</p>}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Video Title</span>
                            </label>
                            <input type="text" placeholder="Video Title" defaultValue={title} {...register("title", { required: true })} className="input input-bordered" />
                            {errors.title?.type === 'required' && <p className="text-red-500">title is required</p>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Category</span>
                            </label>
                            <select className='input input-bordered w-full' defaultValue={category} {...register("category", { required: true })}>
                                <option value="" disabled >Select Video Category </option>
                                <option value="podcast">Podcast</option>
                                <option value="video">Video</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Video Description</span>
                        </label>
                        <input type="text" placeholder="Video Description" defaultValue={description} {...register("description", { required: true })} className="input input-bordered" />
                        {errors.description?.type === 'required' && <p className="text-red-500">description is required</p>}
                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Channel Title</span>
                            </label>
                            <input type="text" placeholder="Channel Title" defaultValue={channelTitle} {...register("channelTitle")} className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text card-text-secondary">Publish Time</span>
                            </label>
                            <input type="text" placeholder="Publish Time" defaultValue={publishTime} {...register("publishTime")} className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="primary-btn">Update Video</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditVideo;