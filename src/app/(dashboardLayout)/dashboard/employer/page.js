"use client"
import DashCard from "@/components/DashboardComponents/DashCard";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import useEmployerAllApplications from "@/hooks/TanStackHooks/useEmployerAllApplications";
import useEmployerAllJobs from "@/hooks/TanStackHooks/useEmployerAllJobs";
import useAuth from "@/hooks/useAuth";

const EmployerHome = () => {
    const [applications] = useEmployerAllApplications();
    const [myJobs] = useEmployerAllJobs();
    const {user} = useAuth();
    const employerInfo = [
        {name: "My Jobs", number: myJobs?.length},
        {name: "Applications", number: applications?.length},
        {name: "Pending Jobs", number: 0}
    ]
    return (
        <div className="p-3">
            <DashboardBanner text={`Welcome ${user?.displayName}!`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5 mt-5">
                {
                    employerInfo?.map(info => <DashCard key={info?.name} matrix={info?.name} quantity={info?.number} />)
                }
            </div>
        </div>
    );
};

export default EmployerHome;