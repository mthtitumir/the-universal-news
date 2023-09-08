import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useCourses = () => {
    const { user, loading } = useAuth();
    const { data: myNews, isLoading: isMyNewsLoading } = useQuery({
        queryKey: ['myNews', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axios.get(`/api/reporters-all-news/${user?.email}`);
                // console.log(res);
                return res.data;
            } catch (error) {
                console.error("Error fetching reporter news:", error);
            }
        }
    });
  return [myNews, loading, isMyNewsLoading]
}

export default useCourses