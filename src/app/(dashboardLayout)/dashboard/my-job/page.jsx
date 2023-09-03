"use client"
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
            <p>Email: {user?.email}</p>
            {jobDatas.map((jobData, index) => (
                <div key={index}>
                    <p>author: {jobData.author}</p>
                </div>
            ))}
        </div>
    );
};

export default MyJobs;