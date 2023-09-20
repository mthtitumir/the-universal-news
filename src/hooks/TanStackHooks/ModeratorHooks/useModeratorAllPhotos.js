"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useModeratorAllPhotos = () => {
    const { user, loading } = useAuth();
    const { data: myPhotos, isLoading: isMyPhotosLoading } = useQuery({
        queryKey: ['myPhotos', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/moderator/my-photos/${user?.email}`);
            return res.data;
        }
    })
    return [myPhotos, isMyPhotosLoading, loading];
}
export default useModeratorAllPhotos;