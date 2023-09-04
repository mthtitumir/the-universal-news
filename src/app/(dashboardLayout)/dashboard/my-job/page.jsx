"use client"
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyJobs = () => {
    const { user } = useAuth();
    const [jobDatas, setjobData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/getSingleJobData?email=${user.email}`);
                    setjobData(response.data);
                } catch (error) {
                    console.error("Error fetching reporter news:", error);
                }
            }
        };
        fetchData();
    }, [user])

    return (
        <div>
            <h1 className='text-center text-5xl text-cyan-500 mt-5'>my jobs </h1>
            <p className='text-center text-4xl text-cyan-500 mt-5'>Author: {user?.displayName}</p>
            <div>
                
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className=' '>
                                    <th className='border '>serial</th>
                                    <th className='border '>title</th>
                                    <th className='border '>companyName</th>
                                    <th className='border '>category</th>
                                    <th className='border '>datePosted</th>
                                    <th className='border '>jobLocation</th>
                                    <th className='border '>jobType</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobDatas.map((jobdata,index) => (
                                    <tr key={jobdata.id}>
                                        <td className='border '>{index + 1}</td>
                                        <td className='border '>{jobdata.title}</td>
                                        <td className='border '>{jobdata.companyName}</td>
                                        <td className='border '>{jobdata.category}</td>
                                        <td className='border '>{jobdata.datePosted}</td>
                                        <td className='border '>{jobdata.jobLocation}</td>
                                        <td className='border '>{jobdata.jobType}</td>
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