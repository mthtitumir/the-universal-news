"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useModeratorAllLifestyle = () => {
    const { user, loading } = useAuth();
    const { data: myLifestyle, isLoading: isMyLifestyleLoading } = useQuery({
        queryKey: ['myLifestyle', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/moderator/my-lifestyle/${user?.email}`);
            return res.data;
        }
    })
    return [myLifestyle, isMyLifestyleLoading, loading];
}
export default useModeratorAllLifestyle;