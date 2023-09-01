
import React, { useContext } from 'react';
import { BiFilterAlt } from 'react-icons/bi'
import data from '../../utils/job.json'
import SingleJob from './SingleJob';
import Link from 'next/link';
import HandleSearchFunction from './HandleSearchefuntion';

const JobsBanner = () => {
    const jobsData = data;
    // console.log(jobsData)
    return (
        <div>
            <div className=' bg-cyan-500 text-white py-3 flex justify-center gap-10 items-center'>
                <h1 className='text-5xl font-normal text-center '>Universal Jobs</h1>
                <div className='text-center '>
                    <Link href='/jobPostPayment'>
                        <button className='py-2 px-3 bg-white text-black shadow-md hover:scale-105 duration-500 rounded-sm mt-2'>Become a Eomployer</button>
                    </Link>

                </div>
            </div>

            <div className='bg-gray-100'>
                <h1 className='text-center md:pl-48 font-semibold text-slate-800 pt-10 text-lg
                '>232 remote jobs and internships matching your preferences</h1>

                <div className='flex-row md:flex w-[90%] mx-auto sm:gap-5 gap-5 py-5 '>

                    {/* Filter */}
                    <div className='md:w-[30%] bg-white py-10 px-8 h-[450px]'>

                        {/* headline */}
                        <div className='flex items-center justify-center gap-1 p-2 px'>
                            <BiFilterAlt className='text-blue-600 text-lg'></BiFilterAlt>
                            <h1 className='font-semibold text-slate-900'>Filter</h1>
                        </div>

                        {/* input */}

                        <HandleSearchFunction />
                        <div>
                            <div className='flex items-center gap-2 my-3'>
                                <input type="checkbox" style={{ width: '17px', height: '20px' }} />
                                <label className='text-gray-400 text-base'>Remote</label>
                            </div>
                            <div className='flex items-center gap-2 my-3'>
                                <input type="checkbox" style={{ width: '17px', height: '20px' }} />
                                <label className='text-gray-400 text-base'>Include all jobs matching filter</label>
                            </div>
                            <div className='flex items-center gap-2 my-3'>
                                <input type="checkbox" style={{ width: '17px', height: '20px' }} />
                                <label className='text-gray-400 text-base'>
                                    Part time</label>
                            </div>
                        </div>
                    </div>

                    {/* Jobs Options */}
                    <div className='md:w-[60%] '>
                        <div className=''>
                            {
                                jobsData.map(job => <SingleJob
                                    key={job.id}
                                    job={job}
                                ></SingleJob>)
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default JobsBanner;