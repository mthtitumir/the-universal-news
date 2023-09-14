"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import Spinner from '@/components/ErrorComponents/Spinner';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
                console.error("Error fetching employer jobs:", error);
            }
        }
    });
    console.log(myJobs);

    if (loading || isMyJobsLoading) {
        return <Spinner />
    }

    return (
        <div className='p-3'>
            <DashboardBanner text={"My Jobs"} />
            <div>

                <div className="overflow-x-auto">
                <table className="table table-xs mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Employer</th>
                        <th>Category</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Experience</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myJobs?.map(job => (
                            <tr className="" key={job._id}>
                                <td>{job?.jobId}</td>
                                <th>{job?.title}</th>
                                <td>{job?.companyName}</td>
                                <td>{job?.authorEmail}</td>
                                <td>{job?.category}</td>
                                <td>{job?.applicationDeadline}</td>
                                <td>{job?.salary}</td>
                                <td>{job?.status}</td>
                                <td>{job?.experience?.slice(0,3) || "None"} Years</td>
                                <DeleteNews id = {job._id.toString()} what={"job"} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;