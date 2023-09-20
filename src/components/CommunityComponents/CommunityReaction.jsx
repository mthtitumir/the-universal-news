"use client"
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import MyModal from "../HandleModal/Modal";
import HandleCommunityComment from "./HandleCommunityComment";

const CommunityReaction = ({ posts }) => {

    const [isOpen, setIsOpen] = useState(false)
    const {postId, likes, comments } = posts ;
   
    const [likies ,setLikes] = useState(likes)
    const handleLike = async (id, action,email) =>{
        try {
            const res = await axios.patch(`/api/community/add-like-dislike/${id}`, {action,email});
            setLikes(res.data.data);
            setisReact(res.data.islike)
        } catch (error) {
            console.log(error.message);
        }
        
    }
    return (
        <>
        
            <div className="flex justify-evenly items-center mt-7"> {/*bottom like comment share nav*/}
                <button onClick={()=>handleLike(postId, "like")}><AiOutlineHeart className="hover:rounded-full " /> {likies}</button>
                <button onClick={()=> setIsOpen(!isOpen)} ><BiCommentDetail className="hover:rounded-full" /> {comments?.length}</button>
                <button ><AiOutlineShareAlt className="hover:rounded-full" />{postId}</button>
            
            </div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                <HandleCommunityComment posts={posts}/>
            </MyModal>
        </>
    );
};

export default CommunityReaction;