"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user } = useAuth();
    const [adminData, setAdminData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/verifyAdmin?email=${user.email}`);
                    setAdminData(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchAdminData();
    }, [user]);

    return {
        adminData,
        isLoading,
        error
    };
};

export default useAdmin;
