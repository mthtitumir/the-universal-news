"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useSingleJob = (id) => {
    const { data: singleJob, isLoading: singleJobLoading } = useQuery({
        queryKey: ['singleJob', "user"],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axios.get(`/api/single-job-details/${id}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching single job:", error);
                console.log(error.message);
                throw error; // Rethrow the error to be caught by React Query
            }
        }
    })
    return [singleJob, singleJobLoading]
}
export default useSingleJob;
