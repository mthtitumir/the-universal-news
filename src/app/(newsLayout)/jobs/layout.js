// import { GetAllJobsFromDB } from "@/services/GetAllNewsFromDB";

export const metadata = {
    title: 'Jobs | The Universal News',
    description: 'Discover Opportunities: Your Next Career.',
}
const JobsLayout = async ({ children }) => {
    // const jobsData = await GetAllJobsFromDB();
    // let categories = [];
    // jobsData?.forEach(item => {
    //     if (!categories.includes(item?.category)) {
    //         categories.push(item?.category);
    //     }
    // });
    // console.log(jobsData);
    return (
        <div>
            {children}
        </div>
    );
};

export default JobsLayout;