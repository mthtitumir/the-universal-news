"use client"
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LatestPosts = () => {
    const {user, loading} = useAuth();
    const { data: posts, isLoading: postsLoading, refetch } = useQuery({
        queryKey: ['posts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get("/api/community/all-posts");
            // console.log(res);
            return res.data;
        }
    })
    return [posts, loading, postsLoading, refetch];
}
export default LatestPosts;