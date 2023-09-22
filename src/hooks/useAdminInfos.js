import { GetAllBooks, GetAllEmployers, GetAllJobs, GetAllModerators, GetAllNews, GetAllReporters, GetAllUsers, GetAllVideos, GetPendingNews } from "@/services/GetAllNews"

const AdminInfos = async () => {
    const allNews = await GetAllNews();
    const allUsers = await GetAllUsers();
    const allJobs = await GetAllJobs();
    const allBooks = await GetAllBooks();
    const allVideos = await GetAllVideos();
    const allEmployers = await GetAllEmployers();
    const allReporters = await GetAllReporters();
    const allModerators = await GetAllModerators();
    const allPendingNews = await GetPendingNews();
   
    const lengthInfo = [
        {
            name: "Total News",
            number: allNews?.length
        },
        {
            name: "Pending News",
            number: allPendingNews?.length
        },
        {
            name: "Jobs",
            number: allJobs?.length
        },
        {
            name: "Books",
            number: allBooks?.length
        },
        {
            name: "Videos",
            number: allVideos?.length
        },
        {
            name: "Registered Users",
            number: allUsers?.length
        },

        {
            name: "Happy Employers",
            number: allEmployers?.length
        },
        {
            name: "Brave Reporters",
            number: allReporters?.length
        },
        {
            name: "Dedicated Moderators",
            number: allModerators?.length
        },

    ]
    return lengthInfo;
}

export default AdminInfos;