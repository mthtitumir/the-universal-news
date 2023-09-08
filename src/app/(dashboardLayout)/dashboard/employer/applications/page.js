"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Applications = () => {
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
            <DashboardBanner text={"Applications"} />
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

export default Applications;