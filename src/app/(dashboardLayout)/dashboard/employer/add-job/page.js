"use client"
import useAuth from '@/hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';

const AddAJob = () => {
    const { user } = useAuth();

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        const email = user?.email
        const id = Math.floor(Math.random() * 100000);
        const status = 'pending';
        const datePosted = new Date().toISOString();
        const jobId = Math.floor(1000000000 + Math.random() * 9000000000);
        const { title, description, companyName, companyLogo, jobLocation, employmentType, applicationDeadline, category, jobType, startingTime, experience, jobCategory, applicationInstructions, jobsdescription, requiredSkillses,author } = data;
        const toastId = toast.loading("Loading...");
        const requiredSkills = requiredSkillses.split(',');
        try {
            const response = await axios.post(`/api/add-job`, { id, title, description, requiredSkills, companyName, companyLogo, jobLocation, employmentType, applicationDeadline, category, jobType, startingTime, experience, jobCategory, applicationInstructions, jobsdescription, status, datePosted,jobId, email,author });
            // console.log(response.data);
            if (response.data.insertedId) {
                toast.dismiss(toastId);
                toast.success("Jobs posted successfully!");
            } else {

                toast.dismiss(toastId);
                toast.error(error.message || "Job posting failed!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.dismiss(toastId);
            toast.error(error.message || "Jobs posting failed!");
        }
        reset();

    }
    return (
        <div className='p-3'>
            {/* <h1 className='text-center text-5xl text-cyan-500 mt-5'>Add a Job </h1> */}
            <DashboardBanner text={"Add a Job"} />
            <div className=" w-full  shadow-2xl card-background border border-cyan-500 rounded-lg mt-3">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Title</span>
                            </label>
                            <input type="text" placeholder="Job Title" {...register("title", { required: true })} className="input input-bordered" />
                            {errors.title?.type === 'required' && <p className="text-red-500">Job Title is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Description</span>
                            </label>
                            <input type="text" placeholder="Job Description" {...register("description", { required: true })} className="input input-bordered" />
                            {errors.description?.type === 'required' && <p className="text-red-500">Job Description is required</p>}
                        </div>

                    </div>
                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Company Name</span>
                            </label>
                            <input type="text" placeholder="News img link" {...register("companyName", { required: true })} className="input input-bordered" />
                            {errors.companyName?.type === 'required' && <p className="text-red-500">company Name is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Company Logo</span>
                            </label>
                            <input type="text" placeholder="Company Logo Link" {...register("companyLogo", { required: true })} className="input input-bordered" />
                            {errors.companyLogo?.type === 'required' && <p className="text-red-500"> Company Logo is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text">Job Location</span>
                            </label>
                            <select className='input input-bordered w-full' {...register("jobLocation", { required: true })}>
                                <option className='my-2' value="">Select Job Location </option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On-site</option>
                            </select>
                            {errors.jobLocation?.type === 'required' && <p className="text-red-500">Job Location is required</p>}
                        </div>

                    </div>
                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text">Employment Type</span>
                            </label>
                            <select className='input input-bordered w-full' {...register("employmentType", { required: true })}>
                                <option value="">Select Employment Type </option>
                                <option value="full-time">Fulltime</option>
                                <option value="part-time">Part time</option>
                            </select>
                            {errors.employmentType?.type === 'required' && <p className="text-red-500">Job employment Type is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <Controller
                                control={control}
                                {...register("applicationDeadline", { required: true })}
                                render={({ field }) => (
                                    <DatePicker
                                        className="input input-bordered  w-full"
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
                            {errors.applicationDeadline?.type === 'required' && <p className="text-red-500">Job application Deadline is required</p>}
                        </div>

                    </div>
                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Category</span>
                            </label>
                            <input type="text" placeholder="Job Category" {...register("category", { required: true })} className="input input-bordered" />
                            {errors.category?.type === 'required' && <p className="text-red-500">Job category is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Type</span>
                            </label>
                            <input type="text" placeholder="Job Type" {...register("jobType", { required: true })} className="input input-bordered" />
                            {errors.jobType?.type === 'required' && <p className="text-red-500">jobType is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job starting Time</span>
                            </label>
                            <input type="text" placeholder="Job Starting Time" {...register("startingTime", { required: true })} className="input input-bordered" />
                            {errors.startingTime?.type === 'required' && <p className="text-red-500">Job starting Time is required</p>}
                        </div>

                    </div>
                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Experience</span>
                            </label>
                            <input type="text" placeholder="Job Experience" {...register("experience", { required: true })} className="input input-bordered" />
                            {errors.experience?.type === 'required' && <p className="text-red-500">Job experience is required</p>}
                        </div>

                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select className='input input-bordered w-full' {...register("jobCategory", { required: true })}>
                                <option value="">Select Job Category</option>
                                <option value="full-time">Fulltime</option>
                                <option value="part-time">Internship</option>
                            </select>
                            {errors.jobCategory?.type === 'required' && <p className="text-red-500">Job Category is required</p>}
                        </div>
                      

                    </div>

                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">job requiredSkills</span>
                            </label>
                            <input type="text" placeholder="Job requiredSkills" {...register("requiredSkillses", { required: true })} className="input input-bordered" />
                            {errors.requiredSkillses?.type === 'required' && <p className="text-red-500">Job Description is required</p>}
                        </div>
                        <div className="form-control  md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Salary or Hourly Wage</span>
                            </label>
                            <input type="number" placeholder="Salary or Hourly Wage" {...register("salaryOrHourlyWage", { required: true })} className="input input-bordered" />
                            {errors.salaryOrHourlyWage?.type === 'required' && <p className="text-red-500">Job salaryOrHourlyWage is required</p>}
                        </div>
                        <div className="form-control md:w-[50%]">
                            <label className="label">
                                <span className="label-text card-text-secondary">Author Name</span>
                            </label>
                            <input type="text" placeholder="author name" {...register("author")} defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        
                    </div>


                    <div className='md:flex justify-center items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text card-text-secondary">Application Instructions</span>
                            </label>
                            <textarea placeholder="Instructions" {...register("applicationInstructions", { required: true })} className="textarea textarea-bordered textarea-lg " ></textarea>
                            {errors.applicationInstructions?.type === 'required' && <p className="text-red-500">Job applicationInstructions is required</p>}
                        </div>

                        

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text card-text-secondary">Job Description</span>
                            </label>
                            <textarea placeholder="Description" {...register("jobsdescription", { required: true })} className="textarea textarea-bordered textarea-lg " ></textarea>
                            {errors.jobsdescription?.type === 'required' && <p className="text-red-500">Job jobs description is required</p>}
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="primary-btn">Add This Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAJob;