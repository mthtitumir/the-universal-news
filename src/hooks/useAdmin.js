"use client"

import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const useAdmin = () => {
    const { user } = useAuth()
    useEffect(() => {
        const handleAdmin = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/api/verifyAdmin?email=${user.email}`);
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching admin data:", error);
                }
            }
        };

        handleAdmin();
    }, [user]);
    return (
        <div>

        </div>
    );
};

export default useAdmin;