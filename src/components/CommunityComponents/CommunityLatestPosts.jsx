
import LatestPosts from "@/hooks/TanStackHooks/CommunityHooks/LatestPosts";
import CommunitySingleStatus from "./CommunitySingleStatus";
import axios from "axios";
import { GetAllPosts } from "@/services/GetAllNews";

const CommunityLatestPosts = async () => {
    // const [posts, postsLoading] = LatestPosts();
    const posts = GetAllPosts()
    // console.log(posts)
    return (
        <div className="">
            {/* CommunityLatestPosts: {posts?.length} */}
            <div className="">
                {/* {
                    posts?.map(post => <CommunitySingleStatus key={post?.postId} postId={post?.postId} post={post} />)
                } */}
            </div>
        </div>
    );
};

export default CommunityLatestPosts;