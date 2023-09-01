"use client"
import axios from 'axios';
import { useForm } from 'react-hook-form';

const HandleSearchFunction = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset();
    }
    // const handleSearch = async () => {
    //     setSearchTerm(searchRef.current.value);

    //     try {
    //         const response = await axios.get(`/api/get-all-job-with-search?search=${searchTerm}`);
    //         console.log(response.data); 
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1 my-3'>
                <label className='text-gray-600 text-base'>Jobs</label>
                <input
                    type="text"
                    name='jobQuery'
                    placeholder='Search Jobs'
                    className='border w-3/4 py-2 text-zinc-500 rounded-sm px-3'
                    {...register("jobQuery", { required: true})}
                />
            </div>
            <button className='primary-btn' type='submit' >Search Jobs</button>
            </form>
        </div>
    );
};

export default HandleSearchFunction;
