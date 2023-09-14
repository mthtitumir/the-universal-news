"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useEmployerAllJobs = () => {
    const { user, loading } = useAuth();
    const { data: myJobs, isLoading: isMyJobsLoading } = useQuery({
        queryKey: ['myJobs', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/employer-all-jobs/${user?.email}`);
            return res.data;
        }
    })
    return [myJobs, isMyJobsLoading, loading];
}
export default useEmployerAllJobs;