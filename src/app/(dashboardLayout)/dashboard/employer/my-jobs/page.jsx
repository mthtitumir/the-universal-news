"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyJobs = () => {
    const { user } = useAuth();
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/getSingleJobData?email=${user?.email}`);
                    setJobData(response.data);
                } catch (error) {
                    console.error("Error fetching reporter news:", error);
                }
            }
        };
        fetchData();
    }, [user])

    return (
        <div className='p-3'>
            {/* <h1 className='text-center text-5xl text-cyan-500 mt-5'>my jobs </h1> */}
            <DashboardBanner text={"My Jobs"} />
            <div>
                
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className=' '>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Company Name</th>
                                    <th>Category</th>
                                    <th>Date Posted</th>
                                    <th>Job Location</th>
                                    <th>category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobData.map((job, index) => (
                                    <tr key={job.id}>
                                        <td>{index + 1}</td>
                                        <td>{job.title}</td>
                                        <td>{job.companyName}</td>
                                        <td>{job.category}</td>
                                        <td>{job.datePosted}</td>
                                        <td>{job.jobLocation}</td>
                                        <td>{job.category}</td>
                                        <DeleteNews />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
};

export default MyJobs;