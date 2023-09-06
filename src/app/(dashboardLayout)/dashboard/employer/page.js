"use client"
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const EmployerOverview = () => {
    const { user } = useAuth();
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/getSingleJobData?email=${user.email}`);
                    setJobData(response.data);
                } catch (error) {
                    console.error("Error fetching reporter news:", error);
                }
            }
        };
        fetchData();
    }, [user])
    const [applicationsData, setApplicationsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/getSingleAplications?email=${user.email}`);
                    setApplicationsData(response.data);
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
                data: [jobData?.length, applicationsData?.length],
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
                    <div className="stat-value text-primary">{jobData.length}</div>
                </div>

                <div className="stat text-center">

                    <div className="stat-title">total aplications</div>
                    <div className="stat-value text-secondary ">{applicationsData.length}</div>
                </div>
            </div>
            <div >
                <ReactApexChart options={chartOptions} series={chartData.datasets} type="bar" height={350} />
            </div>
        </div>
    );
};

export default EmployerOverview;