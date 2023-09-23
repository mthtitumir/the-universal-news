"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import useEmployerAllApplications from '@/hooks/TanStackHooks/useEmployerAllApplications';

const Applications = () => {
    const [applications] = useEmployerAllApplications();
    // console.log(applications);
    return (
        <div className='p-3'>
            <DashboardBanner text={"Applications"} />
            <div className='mt-5 border rounded-lg border-cyan-500 p-3'>
                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        <thead>
                            <tr className=' '>
                                <th>JobId</th>
                                <th>Resume</th>
                                <th>Cover Letter</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.map((data, index) => (
                                <tr key={data._id}>
                                    <td>{data?.jobId}</td>
                                    <td>{data?.resume}</td>
                                    <td>{data?.coverLetter}</td>
                                    <td>{data?.userEmail}</td>
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