import SingleJob from "@/components/JobsComponent/SingleJob";
import { GetLocationJobsFromDB } from "@/services/GetAllNewsFromDB";

const LocationJobs = async ({ params }) => {
    const jobsData = await GetLocationJobsFromDB(params?.location);
    console.log(jobsData);
    return (
        <div>{
            jobsData?.map(job => <SingleJob
                key={job?.jobId}
                job={job}
            ></SingleJob>)
        }</div>
    )
}

export default LocationJobs