"use client"
import useAuth from "@/hooks/useAuth";
import useCourses from "./my-news/useCourses";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import DashCard from "@/components/DashboardComponents/DashCard";
const ReporterHome = () => {
    const [myNews, isMyNewsLoading] = useCourses();
    const { user } = useAuth();
    const reporterInfo = [
        { name: "My News", number: myNews?.length || 0 },
        { name: "Pending News", number: 1 },
        { name: "Approved News", number: 1 },
    ];
    return (
        <div className='p-3 md:pr-0 flex flex-col gap-5'>
            <DashboardBanner text={`Welcome, ${user?.displayName}`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5">
                {
                    reporterInfo?.map(info => <DashCard key={info?.name} matrix={info?.name} quantity={info?.number} />)
                }
            </div>
        </div>
    )
}

export default ReporterHome