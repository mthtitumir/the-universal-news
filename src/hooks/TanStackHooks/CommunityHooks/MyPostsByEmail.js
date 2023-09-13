"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const MyPostsByEmail = () => {
    const { user, loading } = useAuth();
    const { data: myPosts, isLoading: MyPostsLoading } = useQuery({
        queryKey: ['myPosts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/community/my-posts/${user?.email}`);
            // console.log(res);
            return res.data;

        }
    })
    return [myPosts, MyPostsLoading]
}
export default MyPostsByEmail;