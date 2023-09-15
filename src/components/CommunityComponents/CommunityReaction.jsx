"use client"
import SinglePostById from "@/hooks/TanStackHooks/CommunityHooks/SinglePostById";
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiDislikeLine } from "react-icons/ri";

const CommunityReaction = ({ posts }) => {
    
    const iconStyles = "text-xl flex gap-3 text-gray-600 ";
    const {postId, likes, dislikes, comments } = posts ;
    const [likies ,setLikes] = useState(likes)
    const handleLike = async (id, action) =>{
        console.log(id, action);
        setLikes(likies+1)
   
        try {
            const res = await axios.patch(`/api/community/add-like-dislike/${id}`, {action});
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
        
    }
    return (
        <>
            <div className="flex justify-evenly items-center mt-7"> {/*bottom like comment share nav*/}
                <button onClick={()=>handleLike(postId, "like")} className={iconStyles}><AiOutlineHeart className="hover:rounded-full hover:bg-pink-500 hover:text-black hover:p-1 hover:text-2xl" /> {likies}</button>
                <button className={iconStyles}><RiDislikeLine className="hover:rounded-full hover:bg-pink-500 hover:text-black hover:p-1 hover:text-2xl" />0</button>
                <button className={iconStyles}><BiCommentDetail className="hover:rounded-full hover:bg-pink-500 hover:text-black hover:p-1 hover:text-2xl" /> {comments?.length}</button>
                <button className={iconStyles}><AiOutlineShareAlt className="hover:rounded-full hover:bg-pink-500 hover:text-black hover:p-1 hover:text-2xl" /></button>
            </div>
        </>
    );
};

export default CommunityReaction;