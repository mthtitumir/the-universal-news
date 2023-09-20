"use client"
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import MyModal from "../HandleModal/Modal";
import HandleCommunityComment from "./HandleCommunityComment";
import useAuth from "@/hooks/useAuth";

const CommunityReaction = ({ posts }) => {
    const {user}= useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [isReact, setisReact] = useState(false)
    const {postId, likes, comments} = posts ;
    const [likies ,setLikes] = useState(likes)
    const handleLike = async (id, action,email) =>{
        try {
            const res = await axios.patch(`/api/community/add-like-dislike/${id}`, {email});
            setLikes(res.data);
        } catch (error) {
            console.log(error.message);
        }
        
    }
    return (
        <>
        
            <div className="flex justify-evenly items-center mt-7"> {/*bottom like comment share nav*/}
                <div className="flex items-center">
                <button onClick={() => {setisReact(!isReact); handleLike(postId,user?.email);  }} className="text-pink-500"><AiOutlineHeart className="hover:rounded-full " /> </button>
                <p className="ml-4">{likies}</p>
                </div>
                <div className="flex items-center">
                <button onClick={()=> setIsOpen(!isOpen)} className=""><BiCommentDetail className="hover:rounded-full" /> </button>
                <p className="ml-4">{comments?.length}</p>
                </div>
                <button className=""><AiOutlineShareAlt className="hover:rounded-full" />{postId}</button>
            </div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                <HandleCommunityComment posts={posts}/>
            </MyModal>
        </>
    );
};

export default CommunityReaction;