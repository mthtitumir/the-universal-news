"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const useModeratorAllBooks = () => {
    const { user, loading } = useAuth();
    const { data: myBooks, isLoading: isMyBooksLoading } = useQuery({
        queryKey: ['myBooks', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/moderator/my-books/${user?.email}`);
            return res.data;
        }
    })
    return [myBooks, isMyBooksLoading, loading];
}
export default useModeratorAllBooks;