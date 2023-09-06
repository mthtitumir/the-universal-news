"use client"
import Spinner from "@/components/ErrorComponents/Spinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MyNews = () => {
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
    // console.log(myNews);
    if( loading || isMyNewsLoading ) {
        return <Spinner />
    }
    return (
        <div>
            <p>Email: {user?.email}</p>
            <p>MyNews : {myNews?.length}</p>
            {/* {myNews.map((newsItem, index) => (
                <div key={index}>
                    <p>Category: {newsItem.category}</p>
                </div>
            ))} */}
        </div>
    );
};

export default MyNews;

