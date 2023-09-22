"use client"
import useAuth from "@/hooks/useAuth";
import useCourses from "./my-news/useCourses";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
const ReporterHome = () => {
    const [myNews, isMyNewsLoading] = useCourses();
    const {user} = useAuth();
    return (
        <div className='p-3 md:pr-0 flex flex-col gap-5'>
            <DashboardBanner text={`Welcome, ${user?.displayName}`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5">
                <div className="flex flex-col justify-center items-center gap-3 bg-cyan-100 hover:bg-cyan-200 shadow-xl py-3 rounded-lg transition duration-800 ease-in-out">
                    <h1 className="text-xl md:text-2xl">Total News</h1>
                    {
                        !isMyNewsLoading && <h1 className="text-2xl md:text-4xl text-pink-600">{myNews?.length}</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default ReporterHome