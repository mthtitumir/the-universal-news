"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import Spinner from '@/components/ErrorComponents/Spinner';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi'

const MyJobs = () => {
    const { user, loading } = useAuth();

    const { data: myJobs, isLoading: isMyJobsLoading } = useQuery({
        queryKey: ['myJobs', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axios.get(`/api/employer-all-jobs/${user?.email}`);
                // console.log(res);
                return res.data;
            } catch (error) {
                console.error("Error fetching reporter news:", error);
            }
        }
    });
    // console.log(myJobs);

    if (loading || isMyJobsLoading) {
        return <Spinner />
    }

    return (
        <div className='p-3'>
            <DashboardBanner text={"My Jobs"} />
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className=' '>
                                <th>JobId</th>
                                <th>Title</th>
                                <th>Company Name</th>
                                <th>Category</th>
                                <th>Date Posted</th>
                                <th>Experience</th>
                                <th>Job Location</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myJobs?.map((job, index) => (
                                <tr key={job.id}>
                                    <td>{job?.id}</td>
                                    <td>{job.title}</td>
                                    <td>{job.companyName}</td>
                                    <td>{job.category}</td>
                                    <td>{job.datePosted}</td>
                                    <td>{job.experience} Years</td>
                                    <td>{job.jobLocation}</td>
                                    <td>{job.status}</td>
                                    <td><FiEdit /></td>
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