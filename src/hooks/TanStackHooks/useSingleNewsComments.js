"use client"
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";
import axios from "axios";

const useSingleNewsComments = (id) => {
    const { user, loading } = useAuth();
    const { data: comments, isLoading: isCommentsLoading, refetch } = useQuery({
        queryKey: ['comments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/load-comments/${id}`);
            return res.data;
        }
    })
    return [comments, isCommentsLoading, refetch]
}
export default useSingleNewsComments;

