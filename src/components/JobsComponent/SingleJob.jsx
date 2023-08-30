import React from 'react';
import Link from 'next/link';
import { BiHome, BiPlay, BiMoney, BiShoppingBag, BiArrowToTop } from 'react-icons/bi'
import { PiClockClockwise } from 'react-icons/pi'
// import { FaArrowTrendUp } from 'react-icons/fa'




const SingleJob = ({ job }) => {
    const { id, employerUserID, jobTitle, jobDescription, companyName, companyLogo, jobLocation, employmentType, salaryOrHourlyWage, applicationDeadline, datePosted, category, requiredSkills, applicationInstructions, jobType, startingTime, jobCategory, experience, postDate } = job
    return (
        <div className="card w-full bg-white mb-3 rounded-sm border-gray-500">
            <div className="card-body">
                <div className=' flex items-center gap-1 border border-gray-200 p-1 rounded-sm w-1/4 text-sm text-gray-500 '>
                    <BiArrowToTop className='text-blue-500  text-base'></BiArrowToTop>
                    <p>Actively hiring</p>
                </div>
                <h2 className="card-title text-lg">{jobTitle}</h2>
                <p className='text-gray-400 font-bold text-sm'>{companyName}</p>

                <div className='flex items-center gap-2 mt-3'>
                    <BiHome className='text-gray-400'></BiHome>
                    <p className='text-sm text-gray-500 '>{jobType}</p>
                </div>

                <div className='flex justify-between items-center mt-3'>

                    <div className='flex items-center gap-2'>
                        <BiPlay className='text-gray-400'></BiPlay>
                        <p className='text-sm text-gray-500 '>{startingTime}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiMoney className='text-gray-400'></BiMoney>
                        <p className='text-sm text-gray-500 '>{salaryOrHourlyWage} /year</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiShoppingBag className='text-gray-400'></BiShoppingBag>
                        <p className='text-sm text-gray-500 '>{experience}</p>
                    </div>

                </div>

                <div className='flex items-center gap-3 my-3'>
                    <span className='bg-gray-100 capitalize  rounded-sm w-24 text-center  px-3'>{jobCategory}</span>
                    <span className='bg-gray-100 capitalize  rounded-sm px-3'>{employmentType}</span>
                </div>

                <div className='flex items-center gap-2 bg-green-100 w-28 py-1 rounded-sm mb-3'>
                    <PiClockClockwise className=' text-green-500 '></PiClockClockwise>
                    <p className='text-sm text-green-500 '>{postDate}</p>
                </div>

                <hr />

                <div className="card-actions justify-end">
                    <Link href={`/jobs/${id}`}>
                        <button className='secondary-btn'>View Details</button>
                    </Link>
                    <button className="primary-btn">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;