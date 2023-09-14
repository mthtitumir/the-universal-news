"use client"
import LatestPosts from "@/hooks/TanStackHooks/CommunityHooks/LatestPosts";
import CommunitySingleStatus from "./CommunitySingleStatus";

const CommunityLatestPosts = () => {
    const [posts, postsLoading] = LatestPosts();
    return (
        <div>
            CommunityLatestPosts: {posts?.length}
            <div>
                {
                    posts?.map(post => <CommunitySingleStatus key={post?.postId} postId={post?.postId} post={post} />)
                }
            </div>
        </div>
    );
};

export default CommunityLatestPosts;