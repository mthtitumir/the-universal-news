"use client"
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import useEmployerAllApplications from "@/hooks/TanStackHooks/useEmployerAllApplications";
import useEmployerAllJobs from "@/hooks/TanStackHooks/useEmployerAllJobs";
import useAuth from "@/hooks/useAuth";

const EmployerHome = () => {
    const [applications] = useEmployerAllApplications();
    const [myJobs] = useEmployerAllJobs();
    const {user} = useAuth();
    return (
        <div className="p-3">
            <DashboardBanner text={`Welcome ${user?.displayName}!`} />
            <div className="stats shadow flex justify-between border-2 border-cyan-500 rounded-lg mt-5">
                <div className="stat">
                    <div className="stat-title">Your Jobs</div>
                    <div className="stat-value text-primary">{myJobs?.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Applications</div>
                    <div className="stat-value text-secondary">{applications?.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-value">86%</div>
                </div>
            </div>
        </div>
    );
};

export default EmployerHome;