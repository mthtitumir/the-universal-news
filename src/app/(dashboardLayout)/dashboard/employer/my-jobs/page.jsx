"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import Spinner from '@/components/ErrorComponents/Spinner';
import useEmployerAllJobs from '@/hooks/TanStackHooks/useEmployerAllJobs';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MyJobs = () => {

    const [myJobs, isMyJobsLoading, loading] = useEmployerAllJobs();
    console.log(myJobs);


    if (loading || isMyJobsLoading) {
        return <Spinner />
    }

    return (
        <div className='p-3'>
            <DashboardBanner text={"My Jobs"} />
            <div className='mt-5 border rounded-lg border-cyan-500 py-2'>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
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
                        <tbody className=''>
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
                                        <td>{job?.experience?.slice(0, 3) || "None"} Years</td>
                                        <DeleteNews id={job._id.toString()} what={"job"} />
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