<<<<<<< HEAD:src/app/(dashboardLayout)/dashboard/employer/page.js
const EmployerHome = () => {
    return (
        <div className="p-3">
            <div className="stats shadow flex justify-between border-2 border-cyan-500 rounded-lg">
                <div className="stat">
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-value">86%</div>
                </div>
=======
"use client"
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const EmployerOverview = () => {
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
    const chartData = {
        labels: ['Total Job Postings', 'Total Applications'],
        datasets: [
            {
                name: 'Data',
                data: [jobDatas?.length, aplicationsDatas?.length],
            },
        ],
    };

    const chartOptions = {
        xaxis: {
            categories: chartData.labels,
        },
    };
    return (
        <div>
            <h1 className='text-center text-5xl text-cyan-500 mt-5'>well come back </h1>
            <p className='text-center text-4xl text-cyan-500 mt-5'>{user?.displayName}</p>
            <div className="stats shadow flex justify-between">

                <div className="stat text-center mt-4">

                    <div className="stat-title">total job posted</div>
                    <div className="stat-value text-primary">{jobDatas.length}</div>
                </div>

                <div className="stat text-center">

                    <div className="stat-title">total aplications</div>
                    <div className="stat-value text-secondary ">{aplicationsDatas.length}</div>
                </div>
            </div>
            <div >
                <ReactApexChart options={chartOptions} series={chartData.datasets} type="bar" height={350} />
>>>>>>> 6fe0fc54acb4b93e28dd530f2207295a0ccac8b6:src/app/(dashboardLayout)/dashboard/employerOverview/page.js
            </div>
        </div>
    );
};

export default EmployerHome;