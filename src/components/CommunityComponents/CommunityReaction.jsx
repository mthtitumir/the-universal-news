"use client"
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import MyModal from "../HandleModal/Modal";
import HandleCommunityComment from "./HandleCommunityComment";
import useAuth from "@/hooks/useAuth";

const CommunityReaction = ({ posts }) => {
    const {user}= useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const {postId, likes, comments } = posts ;
    const [isReact ,setisReact] = useState(null)
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
         <div className="flex justify-evenly items-center mt-7">
                <div className="flex items-center">
                    <button title="Love" onClick={() => handleLike(postId,isReact?"like":"dislike", user?.email)} >
                        <FaHeart className={isReact?"hover:rounded-full text-pink-500":"text-black" } />
                    </button>
                    <p className="ml-4">{likies}</p>
                </div>
                <div className="flex items-center">
                    <button title="Comment" onClick={() => setIsOpen(!isOpen)} className="">
                        <BiCommentDetail className="hover:rounded-full" />
                    </button>
                    <p className="ml-4">{comments?.length}</p>
                </div>
                <button title="Share" className="">
                    <AiOutlineShareAlt className="hover:rounded-full" />
                </button>
            </div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} >
                <HandleCommunityComment posts={posts}/>
            </MyModal>
        </>
    );
};

export default CommunityReaction;