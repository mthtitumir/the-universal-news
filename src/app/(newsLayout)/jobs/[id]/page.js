"use client"
import Image from 'next/image';
import React from 'react';
import data from '../../../../utils/job.json'
import { BiHome, BiPlay, BiMoney, BiShoppingBag, BiArrowToTop, BiSolidBookmark, BiShareAlt, BiVoicemail } from 'react-icons/bi'
import { PiClockClockwise } from 'react-icons/pi'
import { CgSandClock } from 'react-icons/cg'
import { GoPeople, GoClockFill } from 'react-icons/go'
import Link from 'next/link';

const JobDetails = ({ params }) => {
    const jobDetailsData = data;
    const id = params.id;
    const jobDetails = jobDetailsData.find(job => job.id == id);
    const { employerUserID, jobTitle, jobDescription, companyName, companyLogo, jobLocation, employmentType, salaryOrHourlyWage, applicationDeadline, datePosted, category, requiredSkills, applicationInstructions, jobType, startingTime, jobCategory, experience, postDate, description } = jobDetails


    return (
        <div className='p-4 border c-auto'>
            <Image
                height={600}
                width={1000}
                src='https://i.ibb.co/tm7PK2c/r1920.jpg'
                alt='Details Image'
                className='mx-auto my-10'
            ></Image>

            <h1 className='capitalize text-center font-semibold text-2xl'>
                {jobDetails.employmentType} {jobDetails.jobTitle} at {jobDetails.companyName}
            </h1>

            {/* card */}
            <div className="card w-3/4 mx-auto bg-white mb-3 rounded-sm border-gray-500">
                <div className="card-body">
                    <div className=' flex items-center gap-1 border border-gray-200 p-1 rounded-sm w-1/4 text-sm text-gray-500 '>
                        <BiArrowToTop className='text-blue-500  text-base'></BiArrowToTop>
                        <p>Actively hiring</p>
                    </div>
                    <h2 className="card-title text-lg">{jobTitle}</h2>
                    <p className='text-gray-400 font-bold text-sm'>{companyName}</p>

                    <div className='flex items-center gap-2 mt-3'>
                        <BiHome className='text-gray-400 text-lg'></BiHome>
                        <p className='text-sm text-gray-500 '>{jobType}</p>
                    </div>

                    <div className='flex justify-start gap-10 items-center mt-3'>
                        <div className='flex items-center gap-2'>
                            <BiPlay className='text-gray-400 text-lg'></BiPlay>
                            <p className='text-sm text-gray-500 '>{startingTime}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiMoney className='text-gray-400 text-lg'></BiMoney>
                            <p className='text-sm text-gray-500 '>{salaryOrHourlyWage} /year</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiShoppingBag className='text-gray-400 text-lg'></BiShoppingBag>
                            <p className='text-sm text-gray-500 '>{experience}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CgSandClock className='text-gray-400 text-lg'></CgSandClock>
                            <p className='text-sm text-gray-500 '>{applicationDeadline}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 bg-green-100 w-28 py-1 rounded-sm mb-3'>
                        <PiClockClockwise className=' text-green-500 '></PiClockClockwise>
                        <p className='text-sm text-green-500 '>{postDate}</p>
                    </div>


                    <div className='flex justify-between items-center text-xl text-blue-600'>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <GoPeople className='text-xl '></GoPeople>
                            <p className='text-base'>28 application</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <BiSolidBookmark></BiSolidBookmark>
                            <BiShareAlt></BiShareAlt>
                        </div>

                    </div>
                    <hr />

                    <p className='text-base font-semibold my-4'>About {companyName}</p>
                    <p className='text-gray-500 text-sm'>{description}</p>

                    <div className='border p-3 rounded-lg md:mx-3'>
                        <p className='text-sm font-semibold my-2 text-gray-600'>Activity on Internshala</p>

                        <div className='flex items-center gap-5 text-gray-500 text-base '>
                            <div className='flex items-center gap-2'>
                                <GoClockFill></GoClockFill>
                                <p>Hiring since {applicationDeadline}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <BiVoicemail></BiVoicemail>
                                <p>4 opportunities Posted</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-base font-semibold mt-4'>About The Job</p>
                    <p className='text-gray-500 text-sm'>{jobTitle}</p>

                    <p className='text-gray-500 text-sm mt-8 mb-4' > The ideal candidate has a thorough understanding of WordPress development standards and best practices. Strong front-end skills and experience creating and working with custom themes is required.</p>

                    <p className='text-gray-500 text-sm mb-4'>
                        Responsibilities and Duties
                        At least 1 year WordPress and front-end experience
                        Strong knowledge of PHP
                        Developing custom elements/themes in visual studio
                        Building UI is to specifications based on provided PSD mockups
                        Responsive design fundamentals
                        Responsive frameworks (Foundation, Bootstrap, etc)
                        Setting up custom fields / ACF plugin and using inside templates
                        Setting up custom post types and using inside templates
                        Add features/functionality via custom Javascript/jQuery
                        Implementing plugins when plugins are ideal (and knowing when they are not)
                        Implementing 3rd-party libraries and basic APIs
                        Required Experience, Skills and Qualifications
                        Possesses strong attention to detail
                        Hits deadlines
                        Understanding of UX is a plus
                    </p>


                    <p className='text-base font-semibold mt-4'>Skill(s) required</p>
                    <div className='flex items-center gap-4 text-center md:w-2/4'>
                        <p className='bg-gray-100 px-3 py-1 rounded-xl text-gray-500'>{requiredSkills[0]}</p>
                        <p className='bg-gray-100 px-3 py-1 rounded-xl text-gray-500'>{requiredSkills[1]}</p>
                        <p className='bg-gray-100 px-3 py-1 rounded-xl text-gray-500'>{requiredSkills[2]}</p>
                    </div>

                    <p className='text-base font-semibold mt-4'>Salary</p>
                    <p className='text-gray-500 text-sm mb-4'>
                        {salaryOrHourlyWage}
                    </p>

                    <p className='text-base font-semibold '>Number of openings
                    </p>
                    <p className='text-gray-500 text-sm mb-4'>
                        1
                    </p>

                    <div className='mx-auto text-center w-full'>
                        <button className=" px-7 py-4 bg-cyan-500 text-white rounded text-lg" onClick={() => window.my_modal_5.showModal()}>Apply Now</button>
                    </div>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-[95%]">
                        <form method="dialog" className="modal-box">
                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-circle btn-outline -mt-10 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className='bg-gray-100 px-3 py-5 rounded'>
                                <p className='text-base font-semibold '>Applying for {jobTitle} {jobCategory}
                                </p>
                                <p className='text-gray-500 text-sm mb-4'>
                                    {companyName}
                                </p>
                            </div>
                            <hr />

                            <p className='text-base font-semibold mt-4'>Your Resume
                            </p>
                            <p className='text-gray-500 text-sm mb-2'>Your current resume will be submitted along with this application. </p>
                            <input
                                type="file"
                                id="photo"
                                className="file-input file-input-bordered rounded file-input-info w-full h-9"
                            />

                            <p className='text-base font-semibold mt-4'>Cover letter *
                            </p>
                            <p className='text-gray-500 text-sm mb-4'>Why should you be hired for this role? </p>
                            <textarea placeholder='Submit Your Cover Latter' className='border w-full h-28 p-3'></textarea>


                            <p className='text-base font-semibold mt-4'>Your availability
                            </p>
                            <p className='text-gray-500 text-sm mb-4'>Confirm your availability</p>
                            <div className='flex items-center gap-1'>
                                <input type="radio" />
                                <label className='text-gray-500 text-sm'>Yes, I am available for work from home job, starting immediately</label>
                            </div>

                            <div className='flex items-center gap-1 mt-2'>
                                <input type="radio" />
                                <label className='text-gray-500 text-sm'>No (Please slabelecify your availability)</label>
                            </div>

                            <div className='mx-auto w-3/4 text-center py-4'>
                                <button className="primary-btn">Submit Application</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;