"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Application = () => {
    const { user } = useAuth();
    const [aplicationsDatas, setjaplicationsDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/getSingleAplications?email=${user.email}`);
                    setjaplicationsDatas(response.data);
                } catch (error) {
                    console.error("Error fetching reporter news:", error);
                }
            }
        };
        fetchData();
    }, [user])
    return (
        <div>
            <h1 className='text-center text-5xl text-cyan-500 mt-5'>my aplications</h1>
            <p className='text-center text-4xl text-cyan-500 mt-5'>Author: {user?.displayName}</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className=' '>
                                <th>index</th>
                                <th>resume</th>
                                <th>coverLetter</th>
                                <th>user email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aplicationsDatas.map((aplicationsData, index) => (
                                <tr key={aplicationsData._id}>
                                    <td className='border '>{index + 1}</td>
                                    <td className='border '>{aplicationsData.resume}</td>
                                    <td className='border '>{aplicationsData.coverLetter}</td>
                                    <td className='border '>{aplicationsData.usersemail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Application;