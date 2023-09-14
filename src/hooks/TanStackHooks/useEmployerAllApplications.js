"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useEmployerAllApplications = () => {
    const { user, loading } = useAuth();
    const { data: applications, isLoading: applicationsLoading } = useQuery({
        queryKey: ['applications', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/employer-all-applications/${user?.email}`);
            return res.data;
        }
    })
    return [applications, applicationsLoading]
}
export default useEmployerAllApplications;