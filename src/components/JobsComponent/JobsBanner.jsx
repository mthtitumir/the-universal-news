import SingleJob from './SingleJob';
import { GetAllJobs } from '@/services/GetAllNews';

const JobsBanner = async () => {
    const jobsData = await GetAllJobs();
    // console.log(jobsData);
    return (
        <div >
            <div className=''>
                {
                    jobsData?.map(job => <SingleJob
                        key={job?.jobId}
                        job={job}
                    ></SingleJob>)
                }
            </div>
        </div>
    );
};

export default JobsBanner;