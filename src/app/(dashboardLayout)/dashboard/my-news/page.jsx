"use client"
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const MyNews = () => {
    const { user } = useAuth();
    const [userEmail, setUserEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setUserEmail(user.email);
            setIsLoading(false); 
        }
    }, [user]);

    const fetchData = async () => {
        if (userEmail) {
            try {
                const mynews = await axios.get(`/api/getSingleReporterNews?email=${userEmail}`);
                console.log(mynews.data);
                // Handle mynews.data here
            } catch (error) {
                console.error("Error fetching reporter news:", error);
            }
        }
    };

    useEffect(() => {
        if (!isLoading) {
            fetchData(); // Call fetchData once user data is available
        }
    }, [isLoading]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Email: {userEmail}</p>
                    {/* Render other content */}
                </div>
            )}
        </div>
    );
};

export default MyNews;
