import { GetSinglePost } from "@/services/GetAllNews";
import CommunitySingleStatus from "./CommunitySingleStatus";

const CommunityStatus = async ({ id }) => {
    const post = await GetSinglePost(id);
    // console.log(post);
    const iconStyles = "text-2xl flex";
    return (
        <>
            <CommunitySingleStatus post={post} />
        </>
    );
};

export default CommunityStatus;