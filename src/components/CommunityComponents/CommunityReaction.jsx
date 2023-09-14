"use client"
import SinglePostById from "@/hooks/TanStackHooks/CommunityHooks/SinglePostById";
import axios from "axios";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiDislikeLine } from "react-icons/ri";

const CommunityReaction = ({ id }) => {
    const iconStyles = "text-xl flex gap-3 text-gray-600 hover:bg-pink-500 ";
    const [post, refetch, postLoading] = SinglePostById(id);
    if(postLoading) {
        return <>Loading........</>;
    }
    // const { text, photo, authorName, authorImage, likes, dislikes, comments } = post || {};
    console.log(post);
    console.log(id);
    // console.log(id, likes, dislikes);
    const handleLike = async (id, action) =>{
        // console.log(id, action);
        try {
            const res = await axios.patch(`/api/community/add-like-dislike/${id}`, {action});
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
        refetch();
    }
    return (
        <>
            <div className="flex justify-evenly items-center mt-2"> {/*bottom like comment share nav*/}
                <h3 onClick={()=>handleLike(id, "like")} className={iconStyles}><AiOutlineHeart className="hover:rounded-full" /> {post?.likes}</h3>
                <h3 onClick={()=>handleLike(id, "dislike")} className={iconStyles}><RiDislikeLine className="hover:rounded-full" /> {post?.dislikes}</h3>
                <h3 className={iconStyles}><BiCommentDetail className="hover:rounded-full" /> {post?.comments?.length}</h3>
                <h3 className={iconStyles}><AiOutlineShareAlt className="hover:rounded-full" />{id}</h3>
            </div>
        </>
    );
};

export default CommunityReaction;