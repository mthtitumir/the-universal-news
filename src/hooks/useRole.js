"use client"
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
    const { user, loading } = useAuth();
    const { data: role, isLoading: isRoleLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/user-role/${user?.email}`);
            return res.data.role;
        }
    })
    return [role, isRoleLoading]
}
export default useRole;
