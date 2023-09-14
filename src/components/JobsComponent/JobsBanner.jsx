import { BiFilterAlt } from 'react-icons/bi';
import SingleJob from './SingleJob';
import HandleSearchFunction from './HandleSearchFunction';
import { GetAllJobs } from '@/services/GetAllNews';
import { FaUserGraduate } from 'react-icons/fa';

const JobsBanner =async () => {
    const jobsData = await GetAllJobs();
    return (
        <div className='px-3 md:px-0'>
            <div className='c-auto mt-3 h-36 rounded-lg  bg-cyan-400 text-gray-600 py-3 flex justify-center gap-10 items-center'>
                <h1 className='text-5xl font-normal text-center flex gap-5'>Get Hired Today <FaUserGraduate /></h1>
            </div>
            <div className='bg-gray-100 c-auto'>
                <h1 className='text-center md:pl-48 font-semibold text-slate-800 pt-10 text-lg'>{jobsData?.length} remote jobs and internships matching your preferences</h1>
                <div className='grid md:grid-cols-9 md:w-[90%] mx-auto gap-5 py-5 '>
                    {/* Filter */}
                    <div className='md:col-span-3 py-10 px-8 h-fit rounded bg-white'>
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
                    <div className=' md:col-span-6 rounded'>
                        <div className=''>
                            {
                                jobsData?.map(job => <SingleJob
                                    key={job?.jobId}
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