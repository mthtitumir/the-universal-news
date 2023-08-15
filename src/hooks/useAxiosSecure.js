import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://game-tactics-server.vercel.app',
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const responseInterceptor = axiosSecure.interceptors.response.use(
            response => response,
            async error => {
                if (error.response &&
                    (error.response.status === 401 || error.response.status === 403)
                ) {
                    await logOut();
                    router.push('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, router]);

    return axiosSecure;
};

export default useAxiosSecure;