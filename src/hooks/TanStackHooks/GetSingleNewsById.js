"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const GetSingleNewsById = (id) => {
    const { user, loading } = useAuth();
    const { data: post, isLoading: postLoading, refetch } = useQuery({
        queryKey: ['post', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/get-single-news-by-id/${id}`);
            // console.log(res);
            return res.data;
        }
    })
    return [post, postLoading, refetch];
}
export default GetSingleNewsById;