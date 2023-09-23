"use client"

import DashCard from "@/components/DashboardComponents/DashCard";
import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import useModeratorAllBooks from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllBooks";
import useModeratorAllVideos from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllVideos";
import useAuth from "@/hooks/useAuth";

const ModeratorHome = () => {
    const [myBooks] = useModeratorAllBooks();
    const [myVideos] = useModeratorAllVideos();
    const {user} = useAuth();
    const moderatorInfo = [
        { name: "Videos", number: myBooks?.length || 0 },
        { name: "Books", number: myVideos?.length || 0 },
        { name: "Lifestyle", number: 0 },
        { name: "Photos", number: 0 },
        { name: "Magazine", number: 0 },
        { name: "Movies", number: 0 },
    ];
    return (
        <div className='p-3 md:pr-0'>
            <DashboardBanner text={`Welcome, ${user?.displayName}`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5 mt-5">
                {
                    moderatorInfo.map((singleLength, index) => <DashCard key={index+1} matrix={singleLength?.name} quantity={singleLength?.number} />)
                }
            </div>
        </div>
    );
};

export default ModeratorHome;



