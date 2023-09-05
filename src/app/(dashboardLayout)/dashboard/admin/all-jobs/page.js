import DeleteNews from '@/components/DashboardComponents/DeleteNews';
import { GetAllJobs } from '@/services/GetAllNews';

const AllJobs = async () => {
    const jobs = await GetAllJobs();
    // console.log(jobs[0]);
    return (
        <div className="overflow-x-auto p-3">
            <div className=' border-2  border-cyan-500 h-40 rounded-lg flex items-center justify-center'>
                <h1 className="text-3xl text-red-600 font-semibold animate-pulse">{jobs?.length} - Jobs Posted</h1>
            </div>
            <table className="table table-xs mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map(singleJobs => (
                            <tr className="" key={singleJobs._id}>
                                <td>{singleJobs?.id}</td>
                                <th>{singleJobs?.jobTitle}</th>
                                <td>{singleJobs?.companyName}</td>
                                <td>{singleJobs?.jobLocation}</td>
                                <td>{singleJobs?.category}</td>
                                <td>{singleJobs?.applicationDeadline}</td>
                                <td>{singleJobs?.salaryOrHourlyWage}</td>
                                <td>{singleJobs?.experience?.slice(0,3) || "None"}</td>
                                <DeleteNews id = {singleJobs._id.toString()} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;


// _id: new ObjectId("64f0d5302682c3687ae2014e"),
// id: 1,
// employerUserID: 101,
// jobTitle: 'Software Engineer',
// jobDescription: 'Develop and maintain software applications...',
// companyName: 'TechCorp Inc.',
// companyLogo: 'logo_url_1',
// jobLocation: 'onsite',
// employmentType: 'full-time',
// salaryOrHourlyWage: '$100,000',
// applicationDeadline: '2023-09-15',
// datePosted: '2023-08-28',
// category: 'Information Technology',
// jobType: 'Work from home',
// startingTime: 'Starts Immediately',
// experience: '0-5 year experience',
// postDate: '1 days ago',
// jobCategory: 'Internship',
// requiredSkills: [ 'Java', 'Python', 'SQL' ],
// applicationInstructions: 'Please submit your resume and portfolio...',
// description: 'Tech Solutions Inc. is a leading technology company that specializes in providing innovative software solutions for businesses worldwide.'