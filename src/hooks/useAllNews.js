import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const useCourses = () => {
    const {user, loading} = useAuth();
    const {data: allNews=[], refetch} = useQuery({
        queryKey: ['courses'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axios('/courses')
            // console.log(res);
            return res.data;
        }
    })
    return [courses, refetch]
};

export default useCourses;