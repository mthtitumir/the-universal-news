"use client"
import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import useEmployerAllApplications from '@/hooks/TanStackHooks/useEmployerAllApplications';

const Applications = () => {
    // const { user } = useAuth();
    // const [aplicationsDatas, setjaplicationsDatas] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (user) {
    //             try {
    //                 const response = await axios.get(`/api/employer-all-applications/${user.email}`);
    //                 setjaplicationsDatas(response.data);
    //             } catch (error) {
    //                 console.error("Error fetching reporter news:", error);
    //             }
    //         }
    //     };
    //     fetchData();
    // }, [user])
    const [applications] = useEmployerAllApplications();
    console.log(applications);
    return (
        <div>
            <DashboardBanner text={"Applications"} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className=' '>
                                <th>index</th>
                                <th>Resume</th>
                                <th>Cover Letter</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.map((data, index) => (
                                <tr key={data._id}>
                                    <td className='border '>{index + 1}</td>
                                    <td className='border '>{data?.resume}</td>
                                    <td className='border '>{data?.coverLetter}</td>
                                    <td className='border '>{data?.userEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Applications;