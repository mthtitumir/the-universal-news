"use client"

import DashboardBanner from "@/components/DashboardComponents/DashboardBanner";
import useModeratorAllBooks from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllBooks";
import useModeratorAllVideos from "@/hooks/TanStackHooks/ModeratorHooks/useModeratorAllVideos";
import useAuth from "@/hooks/useAuth";

const ModeratorHome = () => {
    const [myBooks] = useModeratorAllBooks();
    const [myVideos] = useModeratorAllVideos();
    const {user} = useAuth();
    const moderatorInfo = [
        { name: "Videos", number: myBooks?.length },
        { name: "Books", number: myVideos?.length },
    ];
    return (
        <div className='p-3 md:pr-0'>
            <DashboardBanner text={`Welcome, ${user?.displayName}`} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border border-cyan-600 rounded-lg p-5 mt-5">
                {
                    moderatorInfo.map((singleLength, index) => <div className="flex flex-col justify-center items-center gap-3 bg-cyan-100 hover:bg-cyan-200 shadow-xl py-3 rounded-lg transition duration-800 ease-in-out" key={index + 1}>
                        <h1 className="text-xl md:text-2xl">{singleLength?.name}</h1>
                        <h1 className="text-2xl md:text-4xl text-pink-600">{singleLength?.number}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ModeratorHome;



