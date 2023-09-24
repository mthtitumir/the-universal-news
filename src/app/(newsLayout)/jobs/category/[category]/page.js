import SingleJob from "@/components/JobsComponent/SingleJob";
import { GetCategoryJobsFromDB } from "@/services/GetAllNewsFromDB";

const JobsByCategory = async ({ params }) => {
    const jobsData = await GetCategoryJobsFromDB(params?.category);
    console.log(jobsData, "from line 6");
    return (
        <div>
            {
                jobsData?.map(job => <SingleJob
                    key={job?.jobId}
                    job={job}
                ></SingleJob>)
            }
        </div>
    );
};

export default JobsByCategory;