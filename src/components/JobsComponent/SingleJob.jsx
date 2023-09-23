import { GetSingleJobsFromDB } from '@/services/GetAllNewsFromDB';
import Link from 'next/link';
import { BiHome, BiSolidTimer, BiMoney, BiShoppingBag, BiArrowToTop } from 'react-icons/bi'
import { PiClockClockwise } from 'react-icons/pi'

const SingleJob = async ({ job }) => {
    // const job = await GetSingleJobsFromDB(id);
    console.log(job);
    const { jobId, status, datePosted, title, companyDetails, companyName, jobLocation, employmentType, applicationDeadline, category, experience, vacancies, requiredSkills, salary, authorEmail, instructions, jobsDescription } = job;
    return (
        <div className="card w-full bg-white mb-3 rounded-sm border-gray-500">
            <div className="card-body">
                <div className=' flex items-center gap-1 border border-gray-200 p-1 rounded-sm w-1/4 text-sm text-gray-500 '>
                    <BiArrowToTop className='text-blue-500  text-base'></BiArrowToTop>
                    <p>Actively hiring</p>
                </div>
                <h2 className="card-title text-lg">{title}</h2>
                <p className='text-gray-400 font-bold text-sm'>{companyName}</p>

                <div className='flex items-center gap-2 mt-3'>
                    <BiHome className='text-gray-400  text-lg'></BiHome>
                    <p className='text-base text-gray-900 capitalize'>{jobLocation}</p>
                </div>

                <div className='flex gap-14 items-center mt-3'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <BiSolidTimer className='text-gray-400 text-lg'></BiSolidTimer>
                            <p className='text-base text-gray-500 '>Deadline</p>
                        </div>
                        <p className='text-sm text-gray-900 text-center'>{applicationDeadline}</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <BiMoney className='text-gray-400'></BiMoney>
                            <p className='text-base text-gray-500 '>Salary</p>

                        </div>
                        <p className='text-sm text-gray-900 text-center '>${salary} /year</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <BiShoppingBag className='text-gray-400'></BiShoppingBag>
                            <p className='text-base text-gray-500 '> Experience</p>

                        </div>
                        <p className='text-sm text-gray-900 text-center '>{experience}</p>
                    </div>

                </div>

                <div className='flex items-center gap-3 my-3'>
                    <span className='bg-gray-100 capitalize  rounded-sm text-center  px-3'>{category}</span>
                    <span className='bg-gray-100 capitalize  rounded-sm px-3'>{employmentType}</span>
                </div>

                <div className='flex items-center gap-2 bg-green-100 text-green-500  w-1/2 py-1 rounded-sm mb-3'>
                    <PiClockClockwise className=' '></PiClockClockwise>
                    <p>Posted Date:</p>
                    <p className='text-sm '>{datePosted}</p>
                </div>

                <hr />

                <div className="card-actions justify-end">
                    <Link href={`/jobs/${jobId}`}>
                        <button className='secondary-btn'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;