"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const SinglePostById = (id) => {
    const { user, loading } = useAuth();
    const { data: post, isLoading: postLoading, refetch } = useQuery({
        queryKey: ['post', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/community/single-post-by-id/${id}`);
            console.log(res.data);
            return res.data;
        }
    })
    return [post, postLoading, refetch];
}
export default SinglePostById;