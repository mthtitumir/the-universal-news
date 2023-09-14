"use client"

import Bookmark from "@/components/HandleBookmark/Bookmark";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const UserBookMark = () => {
    const {user} = useAuth()
    const [bookmarkId ,setBookmarkId] = useState()
    useEffect(()=>{
        const HandleFindBookmark =async ()=>{
            const response = await axios.get(`/api/getUserData/${user?.email}`)
            setBookmarkId(response?.data?.myArtical)
        }
        HandleFindBookmark()
    },[user?.email])
    return (
        <div>
            { bookmarkId?.map(bookmark=><Bookmark key={bookmark._id} id={bookmark._id}></Bookmark>)}
        </div>
    );
};

export default UserBookMark;