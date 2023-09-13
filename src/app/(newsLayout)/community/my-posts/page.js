"use client"

import CommunitySingleStatus from "@/components/CommunityComponents/CommunitySingleStatus";
import Spinner from "@/components/ErrorComponents/Spinner";
import MyPostsByEmail from "@/hooks/TanStackHooks/CommunityHooks/MyPostsByEmail";
import useAuth from "@/hooks/useAuth";
import { BsFire } from "react-icons/bs";

const CommunityMyPosts = () => {
    const [myPosts, MyPostsLoading] = MyPostsByEmail();
    const { loading } = useAuth();
    console.log(myPosts, "myPosts");
    if (loading || MyPostsLoading) {
        return <Spinner />
    }
    return (
        <div className="border-r border-l">
            <h1 className="text-2xl md:text-3xl my-4 px-3 flex gap-3">Your Contributions : {myPosts?.length} <span className="text-red-600 flex"><BsFire /></span> </h1>
            <div>
                {
                    myPosts?.map(post => <CommunitySingleStatus key={post?.postId} post={post} />)
                }
            </div>
        </div>
    );
};

export default CommunityMyPosts;