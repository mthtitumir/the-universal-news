"use client"

import useAuth from "@/hooks/useAuth";
import Spinner from "../ErrorComponents/Spinner";
import Image from "next/image";

const CommunityProfileDown = () => {
    const {user, loading} = useAuth();
    if(!user || loading){
        return <Spinner />
    }
    return (
        <div className="flex items-center gap-5 px-2">
            <div>
                <Image className="rounded-full" height={40} width={40} alt={user?.displayName} src={user?.photoURL || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
            </div>
            <div>
                <h1 className="text-base md:text-lg">{user?.displayName}</h1>
                <h1 className="text-xs md:text-sm text-gray-500">{user?.email}</h1>
            </div>
        </div>
    );
};

export default CommunityProfileDown;