"use client"
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const MyNews = () => {
    const { user } = useAuth();
    const [newsData, setNewsData] = useState([]);
    const fetchData = async () => {
        if (user) {
            try {
                const mynews = await axios.get(`/api/getSingleReporterNews?email=${user.email}`);
                setNewsData(mynews.data);
            } catch (error) {
                console.error("Error fetching reporter news:", error);
            }
        }
    };
    fetchData();
    return (
        <div>
            <p>Email: {user?.email}</p>
            {newsData.map((newsItem, index) => (
                <div key={index}>
                    <p>Category: {newsItem.category}</p>
                </div>
            ))}
        </div>
    );
};

export default MyNews;

