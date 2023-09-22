import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import { GetAllJobs } from '@/services/GetAllNews';

const AllJobs = async () => {
    const jobs = await GetAllJobs();
    // console.log(jobs[0]);
    return (
        <div className="overflow-x-auto p-3">
            <DashboardBanner text={`Approved Jobs - ${jobs?.length}`} />
           <div className='border border-cyan-500 mt-5 p-3 rounded-lg'>
            <table className="table table-xs ">
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
                        jobs.map(job => (
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
    );
};

export default AllJobs;