"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useModeratorAllVideos = () => {
    const { user, loading } = useAuth();
    const { data: myVideos, isLoading: isMyVideosLoading } = useQuery({
        queryKey: ['myVideos', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/moderator/my-videos/${user?.email}`);
            return res.data;
        }
    })
    return [myVideos, isMyVideosLoading, loading];
}
export default useModeratorAllVideos;