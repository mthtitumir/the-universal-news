import { GetAllPosts } from "@/services/GetAllNews";
import CommunityStatus from "./CommunityStatus";

const CommunityTimeLine = async () => {
    const posts= await GetAllPosts();
    // console.log(posts);
    return (
        <div>
            {
                posts?.map(post => <CommunityStatus key={post?.postId} id={post?.postId} />)
            }
        </div>
    );
};

export default CommunityTimeLine;