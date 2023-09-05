import { GetAllEmployers, GetAllJobs, GetAllNews, GetAllReporters, GetAllUsers, GetPendingNews } from "@/services/GetAllNews"

const AdminInfos = async () =>{
    const allNews = await GetAllNews();
    const allUsers = await GetAllUsers();
    const allJobs = await GetAllJobs();
    const allEmployers = await GetAllEmployers();
    const allReporters = await GetAllReporters();
    const allPendingNews = await GetPendingNews();
    // const lengthInfo = [{"News":allNews?.length}, {"Users":allUsers?.length}, {"Jobs":allJobs?.length}, {"Employers": allEmployers?.length}, {"Reporters": allReporters?.length}, {"Pending-News":allPendingNews?.length}];
    const lengthInfo = [
        {
            name: "News",
            number: allNews?.length
        },
        {
            name: "Users",
            number: allUsers?.length
        },
        {
            name: "News",
            number: allNews?.length
        },
        {
            name: "Jobs",
            number: allJobs?.length
        },
        {
            name: "Employers",
            number: allEmployers?.length
        },
        {
            name: "Reporters",
            number: allReporters?.length
        },

    ]
    return lengthInfo;
}

export default AdminInfos;